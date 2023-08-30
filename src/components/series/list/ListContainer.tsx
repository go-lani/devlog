import { SeriesGroup } from '@/service/posts';
import { getDateString } from '@/utils/date';
import Link from 'next/link';

type Props = {
  seriesNames: string[];
  seriesGroup: SeriesGroup;
};

export default function ListContainer({ seriesNames, seriesGroup }: Props) {
  return (
    <ul>
      {seriesNames.map((aSeries) => (
        <li className="border-style flex flex-row text-app-white last-of-type:mb-0">
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
                <li className="border-style last-of-type:border-n flex gap-8 border-b px-8 py-6">
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
                    <p className="mt-2 break-keep text-sm text-gray-400 md:text-base">
                      {post.meta.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
