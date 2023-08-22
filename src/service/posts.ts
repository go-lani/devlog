import path from 'path';
import { readFileSync, readdirSync } from 'fs';
import { sync } from 'glob';
import { cache } from 'react';
import matter from 'gray-matter';
import { Post, PostDetail } from '@/types/post';
import { ALL_POST } from '@/constants/post';

const POSTS_PATH = './contents';

const getThumbnail = (filePath: string) => {
  let thumbnail = path.join(
    '/api/images?imgPath=contents',
    'default_thumbnail.webp',
  );

  const folderPath = path.dirname(filePath);
  try {
    const files = readdirSync(folderPath);
    const imageExtensions = ['.jpg', '.png', '.webp'];
    const imageFiles = files.filter(
      (file) =>
        file.includes('_thumbnail') &&
        imageExtensions.includes(path.extname(file)),
    );

    if (imageFiles.length > 0) {
      thumbnail = path.join(`/api/images?imgPath=${folderPath}`, imageFiles[0]); // First image found
    }
  } catch (err) {
    console.error('An error occurred:', err);
  }

  return thumbnail;
};

const parsePost = async (filePath: string): Promise<Post> => {
  const thumbnail = getThumbnail(filePath);
  const slug = path.basename(filePath).replace(path.extname(filePath), '');

  const file = readFileSync(filePath, 'utf-8');
  const { data: meta, content } = matter(file);
  return { meta: { ...meta, thumbnail, path: slug }, content } as Post;
};

export const getAllPosts = cache(async () => {
  const files = sync(`${POSTS_PATH}/**/*.{md,mdx}`);

  const result = await Promise.all(files.map(parsePost));

  return result.sort((acc, cur) => (acc.meta.date > cur.meta.date ? -1 : 1));
});

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) =>
    posts.filter((post) => post.meta.featured),
  );
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) =>
    posts.filter((post) => !post.meta.featured),
  );
}

export async function getAllPostCategories(): Promise<string[]> {
  return getFeaturedPosts().then((posts) =>
    Array.from(new Set([ALL_POST, ...posts.map((post) => post.meta.category)])),
  );
}

export async function getAllPostSeries(): Promise<string[]> {
  return getFeaturedPosts().then((posts) =>
    Array.from(
      new Set(
        posts
          .filter((post) => post.meta.series)
          .map((post) => post.meta.series!),
      ),
    ),
  );
}

export async function getSeriesPosts(series: string): Promise<Post[]> {
  return getFeaturedPosts().then((posts) =>
    posts.filter((post) => post.meta.series === series),
  );
}

export async function getPost(fileName: string): Promise<PostDetail> {
  const posts = await getFeaturedPosts();
  const post = posts.find((post) => post.meta.path === fileName);

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length ? posts[index + 1] : null;

  return { ...post, next, prev };
}
