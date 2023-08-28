'use client';

import { useMemo, useState } from 'react';
import { ALL_POST } from '@/constants/post';
import { Post } from '@/types/post';
import Categories from './Categories';
import PostsGrid from './PostsGrid';

interface Props {
  categories?: string[];
  posts: Post[];
}

export default function PostContainer({ categories, posts }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_POST);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === ALL_POST) return posts;
    return posts.filter((post) => post.meta.tags === selectedCategory);
  }, [posts, selectedCategory]);

  return (
    <section className="px-10">
      {categories && (
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      <PostsGrid posts={filteredPosts} />
    </section>
  );
}
