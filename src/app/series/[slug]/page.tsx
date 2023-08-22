import React from 'react';
import { getSeriesPosts } from '@/service/posts';
import PostContainer from '@/components/post/PostContainer';

interface IProps {
  params: { slug: string };
}

export default async function DetailPage({ params: { slug } }: IProps) {
  const posts = await getSeriesPosts(slug);
  return (
    <section className="container-layout">
      <div className="content-layout border-style border-x">
        <PostContainer posts={posts} />
      </div>
    </section>
  );
}
