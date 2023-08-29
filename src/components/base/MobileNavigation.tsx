import localFont from 'next/font/local';
import { MENU } from './Navigation';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
  closeModal?: () => void;
}

const shareTechMono = localFont({
  src: [
    {
      path: '../../../public/assets/fonts/ShareTechMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function MobileNavigation({ closeModal }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="min-h-screen w-screen bg-neutral-900">
      <div className="border-style border-b px-4">
        <div className="border-style flex  w-full justify-between border-x">
          <p
            className={`${shareTechMono.className} bg-black px-4 py-3 text-xl text-white`}
          >
            &lt;Menu /&gt;
          </p>
          <button
            type="button"
            className="border-style border-l"
            onClick={closeModal}
          >
            <div className="border-[16px] border-b-neutral-900	 border-l-zinc-600 border-r-zinc-600 border-t-neutral-900" />
          </button>
        </div>
      </div>
      <div className="border-style border-b px-4">
        <ul className="border-style border-x">
          {MENU.map(({ href, title }) => (
            <li
              className="border-style mx-[-1rem] flex h-full items-center border-b last:border-0"
              key="href"
            >
              <span className="border-style flex w-full items-center px-4 text-lg">
                <button
                  type="button"
                  className={`${
                    pathname.includes(href) && 'bg-black'
                  } border-style w-full rounded-full border-x px-4 py-4 text-left text-sm text-white`}
                  onClick={() => {
                    router.push(href);
                    closeModal!();
                  }}
                >
                  {title}
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
