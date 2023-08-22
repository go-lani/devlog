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
        <div className="px-3 py-5 flex flex-col items-center">
          <time className="font-semibold self-end text-xs text-gray-700">
            {new Date(date).toLocaleDateString()}
          </time>
          <h3 className="text-xl font-bold mt-3">{title}</h3>
          <p className="w-full text-xl mt-2 truncate text-center">
            {description}
          </p>
          <span className="text-s mt-2 py-2 px-3 bg-zinc-800 rounded-xl overflow-hidden text-white">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
