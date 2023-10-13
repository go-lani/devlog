'use client';

import { useMemo, useState } from 'react';
import { ALL_POST } from '@/constants/post';
import { Post } from '@/types/post';
import Categories from './Categories';
import ListContainer from './ListContainer';

interface Props {
  tags: string[];
  posts: Post[];
}

export default function ListPage({ tags, posts }: Props) {
  const [selectedTag, setSelectedTag] = useState<string>(ALL_POST);

  const currentPost = useMemo(() => {
    if (selectedTag === ALL_POST) return posts;
    return posts.filter((post) => post.meta.tags.includes(selectedTag));
  }, [posts, selectedTag]);

  return (
    <>
      <section className="container-layout border-style grow-0 border-b bg-zinc-800">
        <div className="content-layout border-style relative border-x px-4 pt-16 md:px-5 md:pt-24">
          <div className="flex-start border-style mx-[-1rem] flex border-t p-4 md:mx-[-1.25rem] md:p-5">
            <h1 className="relative text-5xl text-app-white md:text-7xl">
              Snippet
              <span className="absolute right-[-1.25rem] top-0 text-2xl text-app-red">
                {currentPost.length}
              </span>
            </h1>
          </div>
        </div>
      </section>
      <section className="container-layout border-style grow-0 border-b bg-zinc-800">
        <div className="content-layout border-style border-x">
          <Categories
            tags={tags}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        </div>
      </section>
      <section className="container-layout bg-zinc-800">
        <div className="content-layout border-style flex flex-row border-x">
          <ListContainer selectedTag={selectedTag} posts={currentPost} />
        </div>
      </section>
    </>
  );
}
