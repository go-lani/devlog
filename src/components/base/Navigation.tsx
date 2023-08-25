'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Modal from '../common/modal/Modal';
import MobileNavigation from './MobileNavigation';

export const MENU = [
  { href: '/posts', title: 'Posts' },
  { href: '/series', title: 'Series' },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <>
      <div className="border-style flex h-full items-center border-l md:hidden">
        <Modal
          trigger={
            <button
              type="button"
              className="relative h-[32px] w-[32px] bg-zinc-600"
            >
              <span className="hidden-text">메뉴 열기</span>
            </button>
          }
          component={<MobileNavigation />}
          hasDim
        />
      </div>
      <ul className="hidden h-full md:flex">
        {MENU.map(({ href, title }) => (
          <li
            className="border-style flex h-full items-center border-l"
            key="href"
          >
            <span className="border-style flex w-full items-center border-y px-5 text-lg">
              <Link
                href={href}
                className={`${
                  pathname.includes(href) && 'bg-black'
                } border-style rounded-full border-x px-2 text-base text-white transition-colors ease-in`}
              >
                {title}
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
