import Link from 'next/link';
import { Meta } from '@/types/post';
import Img from '../common/Img';

interface Props {
  meta: Meta;
}

export default function PostCard({
  meta: { thumbnail, path, date, title, description, category },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="overflow-hidden rounded-lg shadow-md hover:shadow-xl">
        <div>
          <Img className="w-full" src={thumbnail} alt={title} />
        </div>
        <div className="flex flex-col items-center px-3 py-5">
          <time className="self-end text-xs font-semibold text-gray-700">
            {new Date(date).toLocaleDateString()}
          </time>
          <h3 className="mt-3 text-xl font-bold">{title}</h3>
          <p className="mt-2 w-full truncate text-center text-xl">
            {description}
          </p>
          <span className="text-s mt-2 overflow-hidden rounded-xl bg-zinc-800 px-3 py-2 text-white">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
