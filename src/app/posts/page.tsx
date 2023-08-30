import { Metadata } from 'next';
import { getAllPostTags, getFeaturedPosts } from '@/service/posts';
import ListPage from '@/components/post/list/ListPage';

export const metadata: Metadata = {
  title: 'devlog - posts',
  description: "lani's devlog",
};

export default async function Posts() {
  const tags = await getAllPostTags();
  const posts = await getFeaturedPosts();

  return <ListPage tags={tags} posts={posts} />;
}
