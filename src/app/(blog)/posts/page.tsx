import { Metadata } from 'next';
import { getFeaturedPosts, getTags } from '@/service/posts';
import ListPage from '@/components/post/list/ListPage';

export const metadata: Metadata = {
  title: 'Post',
  description: "Lani's devlog posts",
};

export default async function Posts() {
  const posts = await getFeaturedPosts();
  const tags = await getTags(posts);

  return <ListPage tags={tags} posts={posts} />;
}
