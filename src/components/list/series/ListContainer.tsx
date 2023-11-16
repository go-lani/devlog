import Link from 'next/link';
import { SeriesGroup } from '@/service/posts';
import { getDateString } from '@/utils/date';

type Props = {
  seriesNames: string[];
  seriesGroup: SeriesGroup;
};

export default function ListContainer({ seriesNames, seriesGroup }: Props) {
  return (
    <ul>
      {seriesNames.length > 0 ? (
        seriesNames.map((aSeries) => (
          <li
            className="border-style flex flex-row text-app-white last-of-type:mb-0"
            key={aSeries}
          >
            <div className="border-style hidden w-[280px] shrink-0 flex-col border-r bg-zinc-800 px-4 py-[48px] md:flex">
              <p className="border-style mx-[-1rem] border-y bg-neutral-800 p-4 text-right text-base italic text-app-white">
                Recent
              </p>
            </div>
            <div className="w-full">
              <h2 className="border-style inline-block border-r bg-neutral-800 px-8 py-3">
                <span className="relative inline-block text-base">
                  {aSeries}
                  <span className="absolute right-[-0.75rem] top-[-0.25rem] text-xs text-app-pink">
                    {seriesGroup[aSeries].length}
                  </span>
                </span>
              </h2>
              <ul className="border-style border-t bg-neutral-800">
                {seriesGroup[aSeries].map((post) => (
                  <li
                    className="border-style last-of-type:border-n flex gap-8 border-b px-8 py-6"
                    key={post.meta.title}
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
                        <h3>{post.meta.title}</h3>
                      </Link>
                      <p className="mt-2 break-keep text-sm text-gray-400 md:text-base">
                        {post.meta.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))
      ) : (
        <li className="flex flex-col items-center justify-center bg-neutral-800 py-32">
          <img
            src="/assets/images/icons/not.svg"
            className="h-[80px] w-[80px]"
            alt="series is empty"
          />
          <p className="mt-8 flex items-center text-base text-app-white md:text-lg">
            아직 작성된 시리즈가 없습니다
          </p>
          <p className="flex items-center gap-1 text-sm text-app-white md:text-base">
            조금만 기다려주세요.
          </p>
        </li>
      )}
    </ul>
  );
}
