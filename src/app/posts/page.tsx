import { Metadata } from 'next';
import Image from 'next/image';
import { getAllPostCategories, getAllPosts, getPost } from '@/service/posts';
import ThumbnailImage from '@/components/common/ThumbnailImage';
import PostContainer from '@/components/post/PostContainer';

export const metadata: Metadata = {
  title: 'devlog - posts',
  description: "lani's devlog",
};

export default async function Posts() {
  const categories = await getAllPostCategories();

  // const post = await getPost('best-react-practices');
  // const src = `/api/images?imgPath=${post.meta.thumbnail}`;
  // console.log('post', post);

  const posts = await getAllPosts();

  return (
    <section className="container-layout">
      <div className="content-layout border-style border-x-2">
        <PostContainer categories={categories} posts={posts} />
      </div>
    </section>
  );
}
