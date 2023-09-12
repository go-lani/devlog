import localFont from 'next/font/local';
import { usePathname, useRouter } from 'next/navigation';
import { MENU } from '@/constants/app';

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
    <div className="min-h-screen w-screen bg-zinc-800">
      <div className="border-style border-y px-4">
        <div className="border-style flex w-full justify-between border-x">
          <p
            className={`${shareTechMono.className} bg-neutral-900 px-4 py-3 text-xl text-app-white`}
          >
            &lt;Menu /&gt;
          </p>
          <button
            type="button"
            className="border-style border-l"
            onClick={closeModal}
          >
            <div className="border-[18px] border-b-neutral-900	border-l-neutral-700 border-r-neutral-700 border-t-neutral-900" />
          </button>
        </div>
      </div>
      <div className="border-style border-b px-4">
        <ul className="border-style border-x">
          {MENU.map(({ href, title }) => (
            <li
              className="border-style mx-[-1rem] flex h-full items-center border-b last:border-0"
              key={href}
            >
              <span className="border-style flex w-full items-center px-4 text-lg">
                <button
                  type="button"
                  className={`${
                    pathname.includes(href) && 'bg-neutral-900'
                  } border-style w-full rounded-full border-x px-4 py-4 text-left text-sm text-app-white`}
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
