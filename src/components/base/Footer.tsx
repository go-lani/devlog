import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({ subsets: ['latin'] });

export default function Footer() {
  return (
    <footer
      className={`${roboto.className} container-layout border-style border-y bg-neutral-800`}
    >
      <div className="content-layout border-style border-x py-4">
        <p className="text-center text-xs font-bold text-app-white md:text-sm">
          © 2023 Lani. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
