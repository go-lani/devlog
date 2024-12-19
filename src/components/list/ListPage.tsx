'use client';

import { useMemo, useState } from 'react';

import { ALL_POST } from '@/constants/post';
import { Meta } from '@/types/post';

import ListContainer from './ListContainer';
import Tags from './Tags';

interface Props {
  category: 'Posts' | 'Snippet';
  tags: string[];
  postMetas: Meta[];
}

export default function ListPage({ category, tags, postMetas }: Props) {
  const [selectedTag, setSelectedTag] = useState<string>(ALL_POST);

  const currentPost = useMemo(() => {
    if (selectedTag === ALL_POST) return postMetas;
    return postMetas.filter(({ tags }) => tags.includes(selectedTag));
  }, [postMetas, selectedTag]);

  return (
    <>
      <section className="container-layout border-style grow-0 border-b bg-zinc-800">
        <div className="content-layout border-style relative border-x px-4 pt-16 md:px-5 md:pt-24">
          <div className="flex-start border-style mx-[-1rem] flex border-t p-4 md:mx-[-1.25rem] md:p-5">
            <h1 className="relative text-5xl text-app-white md:text-7xl">
              {category}
              <span className="absolute right-[-1.25rem] top-0 text-2xl text-app-red">
                {currentPost.length}
              </span>
            </h1>
          </div>
        </div>
      </section>
      <section className="container-layout border-style grow-0 border-b bg-zinc-800">
        <div className="content-layout border-style border-x">
          <Tags
            tags={tags}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        </div>
      </section>
      <section className="container-layout bg-zinc-800">
        <div className="content-layout border-style flex flex-row border-x">
          <ListContainer selectedTag={selectedTag} postMetas={currentPost} />
        </div>
      </section>
    </>
  );
}
