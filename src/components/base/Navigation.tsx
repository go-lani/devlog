'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENU } from '@/constants/app';
import Modal from '../common/modal/Modal';
import MobileNavigation from './MobileNavigation';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <>
      <div className="border-style flex h-full items-center border-l md:hidden">
        <Modal
          trigger={
            <button
              type="button"
              className="flex h-full items-center rounded-3xl bg-neutral-900 px-4 text-base text-app-white transition-colors"
            >
              menu
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
            key={href}
          >
            <Link
              href={href}
              className={`${
                pathname.includes(href) && 'bg-neutral-900'
              } border-style flex h-full items-center rounded-full border-x px-8 text-base text-app-white transition-colors ease-in`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
