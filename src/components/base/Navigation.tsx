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
        <li className="flex items-center h-full" key="href">
          <Link
            href={href}
            className={`${
              pathname.includes(href)
                ? 'dark-mode-bg text-white'
                : 'light-mode-bg text-zinc-700'
            } flex items-center h-full px-6 font-medium text-xl border-style border-l-2`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
