import path from 'path';
import { readFileSync, readdirSync } from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { generateTocTree, getHeadingTree } from '@/utils/generateTocTree';
import { ALL_POST } from '@/constants/post';
import { Meta, Post, PostDetail } from '@/types/post';
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

export async function generateMeta(filePath: string): Promise<Meta> {
  const thumbnail = getThumbnail(filePath);
  const slug = path.basename(filePath).replace(path.extname(filePath), '');

  const file = readFileSync(filePath, 'utf-8');
  const { data: meta, content } = matter(file);
  const result = {
    ...meta,
    tags: meta.tags.split(',').map((tag: string) => tag.trim()),
    thumbnail,
    path: slug,
    readingMinutes: Math.ceil(readingTime(content).minutes),
    wordCount: content.split(/\s+/gu).length,
  };
  return result as Meta;
}

export const parsePost = async (filePath: string): Promise<Post> => {
  const thumbnail = getThumbnail(filePath);
  const slug = path.basename(filePath).replace(path.extname(filePath), '');
  const file = readFileSync(filePath, 'utf-8');
  const { data: meta, content } = matter(file);
  const headings = await getHeadingTree(content);
  const toc = await generateTocTree(headings);
  const serialized = await serializeMDX({ content, category: 'posts' });

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

async function generateAllMeta() {
  const files = sync(`./${POSTS_PATH}/**/*.{md,mdx}`);
  const postMetas = await Promise.all(files.map(generateMeta));
  return postMetas;
}

export async function getPostMetaList(type: 'Posts' | 'Snippet' = 'Posts') {
  const postMetas = await generateAllMeta();

  return postMetas
    .filter((meta) => meta.featured && meta.type === type)
    .sort((acc, cur) => (acc.date > cur.date ? -1 : 1));
}

export function getTags(postMetas: Meta[]): string[] {
  const allTags = postMetas.map(({ tags }) => tags);
  const flattenTags = allTags.flat();
  return [ALL_POST, ...Array.from(new Set(flattenTags))];
}

export type SeriesGroup = {
  [key: string]: Meta[];
};

function groupBySeries(postMetas: Meta[]) {
  return postMetas.reduce((acc: SeriesGroup, cur: Meta) => {
    const seriesKey = cur.series;
    if (!seriesKey) return acc;

    if (!acc[seriesKey]) {
      acc[seriesKey] = [];
    }
    acc[seriesKey].push(cur);
    return acc;
  }, {});
}

export async function getSeriesList(): Promise<{
  seriesNames: string[];
  seriesGroup: SeriesGroup;
}> {
  const postMetas = await generateAllMeta();
  const postWithSeries = postMetas.filter((meta) => meta.series);
  const seriesNames = Array.from(
    new Set(postWithSeries.map((meta) => meta.series as string)),
  );
  const seriesGroup = groupBySeries(postWithSeries);

  return { seriesNames, seriesGroup };
}

export async function getPostSlugs(type: 'Posts' | 'Snippet' = 'Posts') {
  const postMetas = await getPostMetaList(type);
  return postMetas.map((meta) => ({ slug: meta.path }));
}

export async function getSeriesPosts(series: string): Promise<Meta[]> {
  const postMetas = await getPostMetaList();
  return postMetas.filter((meta) => meta.series === decodeURI(series));
}

export async function getPost(
  fileName: string,
  type: 'Posts' | 'Snippet' = 'Posts',
): Promise<PostDetail> {
  const filePath = path.join(POSTS_PATH, `${fileName}.mdx`);
  const post = await parsePost(filePath);
  const metaList = await getPostMetaList(type);

  const index = metaList.findIndex((post) => post.path === fileName);
  const next = index > 0 ? metaList[index - 1] : null;
  const prev = index < metaList.length ? metaList[index + 1] : null;

  return { ...post, next, prev };
}
