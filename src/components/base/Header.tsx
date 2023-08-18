import { Roboto_Mono } from 'next/font/google';
import Link from 'next/link';

const roboto = Roboto_Mono({ subsets: ['latin'] });

export default function Header() {
  return (
    <header className="flex justify-center border-b-2 container-layout border-style">
      <div className="flex justify-between items-center content-layout border-x-2 border-style">
        <h1
          className={`${roboto.className} p-6 font-bold text-4xl text-zinc-800`}
        >
          <Link href="/">Lani World</Link>
        </h1>
        <ul className="flex h-full">
          <li className="flex items-center h-full">
            <Link
              href="/posts"
              className="flex items-center h-full px-6 font-medium text-xl text-zinc-800 border-style border-l-2"
            >
              Posts
            </Link>
          </li>
          <li className="flex items-center h-full">
            <Link
              href="/series"
              className="flex items-center h-full px-6 font-medium text-xl text-zinc-800 border-style border-l-2"
            >
              Series
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
