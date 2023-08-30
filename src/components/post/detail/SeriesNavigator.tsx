import { getSeriesPosts } from '@/service/posts';
import { getDateString } from '@/utils/date';
import Link from 'next/link';

type Props = {
  seriesName: string;
};

export default async function SeriesNavigator({ seriesName }: Props) {
  const posts = await getSeriesPosts(seriesName);
  return (
    <div className="border-style mt-auto flex flex-col border-t p-4 text-app-white">
      <p className="text-base text-app-blue-green">
        <span className="border-style inline-block border-x border-t bg-zinc-800 px-4 py-2">
          See more "{seriesName}"
        </span>
      </p>
      <ul className="border-style border bg-zinc-800">
        {posts.map((post, index) => (
          <li
            className="border-style flex gap-4 border-b p-4 text-sm last-of-type:border-b-0"
            key={post.meta.title}
          >
            <p>{index + 1}</p>
            <Link href={`/posts/${post.meta.path}`}>{post.meta.title}</Link>
            <p className="ml-auto">
              {getDateString({
                inputDate: post.meta.date,
                separator: '.',
              })}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
