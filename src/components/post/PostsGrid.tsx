import React from 'react';
import { Post } from '@/types/post';
import PostCard from './PostCard';

interface Props {
  posts: Post[];
}

export default function PostsGrid({ posts }: Props) {
  return (
    <ul className="mt-5 grid grid-cols-1 gap-7 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      {posts.map(({ meta }) => (
        <li key={meta.path}>
          <PostCard meta={meta} key={meta.path} />
        </li>
      ))}
    </ul>
  );
}
