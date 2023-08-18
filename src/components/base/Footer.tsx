import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({ subsets: ['latin'] });

export default function Footer() {
  return (
    <footer
      className={`${roboto.className} container-layout border-style border-t-2 bg-zinc-800`}
    >
      <div className="content-layout border-style border-x-2 py-5">
        <p className="text-xl text-center font-bold text-white">
          © 2023 Lani. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
