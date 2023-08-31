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
              className="relative h-[36px] w-[36px] before:absolute before:top-[-50%] before:block before:border-[18px] before:border-transparent before:border-b-neutral-900
              after:absolute after:top-[50%] after:block after:border-[18px] after:border-transparent after:border-t-neutral-900
              "
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
