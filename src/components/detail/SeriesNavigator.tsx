import Link from 'next/link';

import { getSeriesPosts } from '@/service/posts';
import { getDateString } from '@/utils/date';

type Props = {
  seriesName: string;
};

export default async function SeriesNavigator({ seriesName }: Props) {
  const postMetas = await getSeriesPosts(seriesName);
  return (
    <div className="border-style mt-auto flex flex-col border-t p-4 text-app-white">
      <p className="text-base text-app-blue-green">
        <span className="border-style inline-block border-x border-t bg-zinc-800 px-4 py-2">
          See more &quot;{seriesName}&quot;
        </span>
      </p>
      <ul className="border-style border bg-zinc-800">
        {postMetas.map((meta, index) => (
          <li
            className="border-style flex gap-4 border-b p-4 text-sm last-of-type:border-b-0"
            key={meta.title}
          >
            <p>{index + 1}</p>
            <Link href={`/posts/${meta.path}`}>{meta.title}</Link>
            <p className="ml-auto">
              {getDateString({
                inputDate: meta.date,
                separator: '.',
              })}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
