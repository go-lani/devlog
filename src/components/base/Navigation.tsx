'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Modal } from '@lani.ground/react-modal';
import { MENU } from '@/constants/app';
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
          component={(closeModal) => (
            <MobileNavigation closeModal={closeModal} />
          )}
          dim="rgba(0, 0, 0, 0.8)"
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
