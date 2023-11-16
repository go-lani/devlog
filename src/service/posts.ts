import path from 'path';
import { readFileSync, readdirSync } from 'fs';
import { sync } from 'glob';
import { cache } from 'react';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { generateTocTree, getHeadingTree } from '@/utils/generateTocTree';
import { ALL_POST } from '@/constants/post';
import { Post, PostDetail } from '@/types/post';
import { serializeMDX } from '@/utils/serialize';

const POSTS_PATH = 'posts';

const getThumnailBase64 = (
  thumbnailPath = path.join(POSTS_PATH, 'images', 'default_thumbnail.webp'),
) => {
  const fileName = path.basename(thumbnailPath);
  const imageBuffer = readFileSync(thumbnailPath);
  const base64String = imageBuffer.toString('base64');
  return `data:image/${fileName};base64,${base64String}`;
};

const getThumbnail = (filePath: string) => {
  const mdxName = path.basename(filePath).replace(path.extname(filePath), '');
  const folderPath = path.dirname(filePath);
  const folderImagePath = path.join(folderPath, 'images');
  const folderName = folderPath.replace(`${POSTS_PATH}\\`, '');

  const imageExtensions = ['.jpg', '.png', '.webp'];

  try {
    const files = readdirSync(folderImagePath);
    const imageFiles = files.filter(
      (file) =>
        file.includes('_thumbnail') &&
        imageExtensions.includes(path.extname(file)),
    );
    const hasSpecificThumbnail = imageFiles.some((file) =>
      file.includes(mdxName),
    );

    const imagePaths = imageFiles
      .filter((file) =>
        hasSpecificThumbnail
          ? file.includes(mdxName)
          : !file.includes(mdxName) && file.includes(folderName),
      )
      .map((file) => path.join(folderImagePath, file));

    return imagePaths.length > 0
      ? getThumnailBase64(imagePaths[0])
      : getThumnailBase64();
  } catch (err) {
    console.error('An error occurred:', err);
    return '';
  }
};

export const parsePost = async (filePath: string): Promise<Post> => {
  const thumbnail = getThumbnail(filePath);
  const slug = path.basename(filePath).replace(path.extname(filePath), '');

  const file = readFileSync(filePath, 'utf-8');
  const { data: meta, content } = matter(file);
  const headings = await getHeadingTree(content);
  const serialized = await serializeMDX({ content, category: 'posts' });
  const toc = await generateTocTree(headings);

  return {
    meta: {
      ...meta,
      tags: meta.tags.split(',').map((tag: string) => tag.trim()),
      thumbnail,
      path: slug,
      readingMinutes: Math.ceil(readingTime(content).minutes),
      wordCount: content.split(/\s+/gu).length,
    },
    toc,
    content: serialized,
  } as Post;
};

export const getAllPosts = cache(async () => {
  const files = sync(`./${POSTS_PATH}/**/*.{md,mdx}`);

  const result = await Promise.all(files.map(parsePost));

  return result.sort((acc, cur) => (acc.meta.date > cur.meta.date ? -1 : 1));
});

export async function getFeaturedPosts(
  type: 'posts' | 'snippet' = 'posts',
): Promise<Post[]> {
  return getAllPosts().then((posts) =>
    posts.filter((post) => post.meta.featured && post.meta.type === type),
  );
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) =>
    posts.filter((post) => !post.meta.featured),
  );
}

export function getTags(posts: Post[]): string[] {
  const allTags = posts.map((post) => post.meta.tags);
  const flattenTags = allTags.flat();
  return [ALL_POST, ...Array.from(new Set(flattenTags))];
}

export type SeriesGroup = {
  [key: string]: Post[];
};

function groupBySeries(posts: Post[]) {
  return posts.reduce((acc: SeriesGroup, cur: Post) => {
    const seriesKey = cur.meta.series;
    if (!seriesKey) return acc;

    if (!acc[seriesKey]) {
      acc[seriesKey] = [];
    }
    acc[seriesKey].push(cur);
    return acc;
  }, {});
}

export async function getAllPostSeries(): Promise<{
  seriesNames: string[];
  seriesGroup: SeriesGroup;
}> {
  return getFeaturedPosts().then((posts) => {
    const postWithSeries = Array.from(
      new Set(posts.filter((post) => post.meta.series)),
    );
    const seriesNames = Array.from(
      new Set(postWithSeries.map((post) => post.meta.series!)),
    );
    const seriesGroup = groupBySeries(postWithSeries);
    return { seriesNames, seriesGroup };
  });
}

export async function getSeriesPosts(series: string): Promise<Post[]> {
  return getFeaturedPosts().then((posts) =>
    posts.filter((post) => post.meta.series === decodeURI(series)),
  );
}

export async function getPost(
  fileName: string,
  type: 'posts' | 'snippet' = 'posts',
): Promise<PostDetail> {
  const posts = await getFeaturedPosts(type);
  const post = posts.find((post) => post.meta.path === fileName);

  if (!post) {
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  }

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length ? posts[index + 1] : null;

  return { ...post, next, prev };
}

export async function getSnippetPost(fileName: string): Promise<PostDetail> {
  const posts = await getFeaturedPosts();
  const snippetPosts = posts.filter((post) => post.meta.type === 'snippet');
  const post = snippetPosts.find((post) => post.meta.path === fileName);

  if (!post) {
    throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  }

  const index = snippetPosts.indexOf(post);
  const next = index > 0 ? snippetPosts[index - 1] : null;
  const prev = index < snippetPosts.length ? snippetPosts[index + 1] : null;

  return { ...post, next, prev };
}
