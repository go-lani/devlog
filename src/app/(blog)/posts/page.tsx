import { Metadata } from 'next';
import { getAllPostTags, getFeaturedPosts } from '@/service/posts';
import ListPage from '@/components/post/list/ListPage';

export const metadata: Metadata = {
  title: '포스트',
  description: '라니의 포스트 목록',
};

export default async function Posts() {
  const tags = await getAllPostTags();
  const posts = await getFeaturedPosts();

  return <ListPage tags={tags} posts={posts} />;
}