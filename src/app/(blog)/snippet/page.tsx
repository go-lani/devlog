import { Metadata } from 'next';
import { getFeaturedPosts, getTags } from '@/service/posts';
import ListPage from '@/components/list/snippet/ListPage';

export const metadata: Metadata = {
  title: 'Snippet',
  description: "Lani's Snippet",
};

export default async function Snippet() {
  const posts = await getFeaturedPosts('snippet');
  const tags = await getTags(posts);
  return <ListPage posts={posts} tags={tags} />;
}
