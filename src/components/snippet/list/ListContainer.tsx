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
          {posts.length > 0 ? (
            posts.map((post) => (
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
                    href={`/snippet/${post.meta.path}`}
                    className="break-keep text-xl font-semibold md:text-2xl"
                  >
                    <h3>{post.meta.title}</h3>
                  </Link>
                  <p className="mt-2 break-keep text-sm text-gray-400 md:text-base">
                    {post.meta.description}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    {post.meta.tags.map((tag, index) => (
                      <div key={tag} className="flex items-center gap-2">
                        {index !== 0 && (
                          <span className="h-[3px] w-[3px] rounded bg-gray-500" />
                        )}
                        <p
                          className={`text-xs md:text-sm ${
                            selectedTag === ALL_POST || selectedTag === tag
                              ? 'font-bold text-app-blue-green'
                              : 'text-gray-500'
                          }`}
                        >
                          {tag}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li className="flex flex-col items-center justify-center px-4 py-8">
              <img
                src="/assets/images/icons/not.svg"
                className="h-[80px] w-[80px]"
                alt="series is empty"
              />
              <p className="mt-8 flex items-center text-base text-app-white md:text-lg">
                포스팅된 글이 존재하지 않아요.
              </p>
              <p className="flex items-center gap-1 text-sm text-app-white md:text-base">
                조금만 기다려주세요.
              </p>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}