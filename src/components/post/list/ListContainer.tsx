import localFont from 'next/font/local';
import Link from 'next/link';
import { ALL_POST } from '@/constants/post';
import { Post } from '@/types/post';
import { getDateString } from '@/utils/date';

const shareTechMono = localFont({
  src: [
    {
      path: '../../../../public/assets/fonts/ShareTechMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

interface Props {
  selectedTag: string;
  posts: Post[];
}

export default function ListContainer({ selectedTag, posts }: Props) {
  return (
    <>
      <div className="border-style hidden w-[280px] shrink-0 flex-col border-r bg-zinc-800 px-4 py-[56px] md:flex">
        <p className="border-style mx-[-1rem] border-y bg-neutral-800 p-4 text-right text-base italic text-app-white">
          Recent
        </p>
      </div>
      <div className="w-full bg-zinc-800 pb-8">
        <h2
          className={`${shareTechMono.className} hidden-text md:off-hidden-text bg-zinc-800 text-2xl text-app-blue-green md:block`}
        >
          <span className="border-style inline-block border-r bg-neutral-800 p-3">
            &lt;{selectedTag} /&gt;
          </span>
        </h2>
        <ul className="md:border-style flex flex-col bg-neutral-800 text-app-white md:border-t">
          {posts.map((post) => (
            <li
              className="border-style flex gap-4 border-b px-4 py-5"
              key={post.meta.path}
            >
              <p className="text-xs leading-7 text-gray-500 md:text-base md:leading-8">
                {getDateString({
                  inputDate: post.meta.date,
                  separator: '.',
                })}
              </p>
              <div>
                <Link
                  href={`/posts/${post.meta.path}`}
                  className="break-keep text-xl font-semibold md:text-2xl"
                >
                  {post.meta.title}
                </Link>
                <ul className="mt-2 flex gap-2">
                  {post.meta.tags.map((tag) => (
                    <li
                      key={tag}
                      className={`text-xs md:text-sm ${
                        selectedTag === ALL_POST || selectedTag === tag
                          ? 'font-bold text-app-blue-green'
                          : 'text-gray-500'
                      }`}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <p className="mt-2 break-keep text-sm text-gray-400 md:text-base">
                  {post.meta.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
