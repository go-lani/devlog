import { Metadata } from 'next';
import { getAllPostCategories, getFeaturedPosts } from '@/service/posts';
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

  const posts = await getFeaturedPosts();

  return (
    <section className="container-layout">
      <div className="content-layout border-style border-x">
        <PostContainer categories={categories} posts={posts} />
      </div>
    </section>
  );
}
