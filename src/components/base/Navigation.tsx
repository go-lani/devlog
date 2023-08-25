'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Modal from '../common/modal/Modal';
import MobileNavigation from './MobileNavigation';
import Sample2 from '../common/modal/Sample2';
import Sample1 from '../common/modal/Sample1';
import Sample3 from '../common/modal/Sample3';

const MENU = [
  { href: '/posts', title: 'Posts' },
  { href: '/series', title: 'Series' },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <>
      <div className="flex">
        <Modal
          trigger={<button type="button">모달 1</button>}
          component={<Sample1 />}
          hasDim
        />
        <Modal
          hasDim
          trigger={<button type="button">모달 2</button>}
          component={<Sample2 />}
        />
        <Modal
          trigger={<button type="button">모달 3</button>}
          component={<Sample3 />}
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
