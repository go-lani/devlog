import { Metadata } from 'next';
import { getFeaturedPosts, getTags } from '@/service/posts';
import ListPage from '@/components/snippet/list/ListPage';

export const metadata: Metadata = {
  title: '메모',
  description: '라니의 메모 목록',
};

export default async function Snippet() {
  const posts = await getFeaturedPosts('snippet');
  const tags = await getTags(posts);
  return <ListPage posts={posts} tags={tags} />;
}
