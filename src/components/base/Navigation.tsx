'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

const MENU = [
  { href: '/posts', title: 'Posts' },
  { href: '/series', title: 'Series' },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <ul className="flex h-full">
      {MENU.map(({ href, title }) => (
        <li className="flex h-full items-center" key="href">
          <Link
            href={href}
            className={`${
              pathname.includes(href)
                ? 'dark-mode-bg text-white'
                : 'light-mode-bg text-zinc-700'
            } border-style flex h-full items-center border-l px-5 text-lg`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
