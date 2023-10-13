import { Metadata } from 'next';
import { getFeaturedPosts, getTags } from '@/service/posts';
import ListPage from '@/components/post/list/ListPage';

export const metadata: Metadata = {
  title: '포스트',
  description: '라니의 포스트 목록',
};

export default async function Posts() {
  const posts = await getFeaturedPosts();
  const tags = await getTags(posts);

  return <ListPage tags={tags} posts={posts} />;
}
