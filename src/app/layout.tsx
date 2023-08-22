import localFont from 'next/font/local';
import type { Metadata } from 'next';
import Header from '@/components/base/Header';
import '@/styles/globals.css';
import Footer from '@/components/base/Footer';

export const metadata: Metadata = {
  title: 'devlog',
  description: "lani's devlog",
};

const spoqaSans = localFont({
  src: [
    {
      path: '../../public/assets/fonts/SpoqaHanSansNeo-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/SpoqaHanSansNeo-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/SpoqaHanSansNeo-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${spoqaSans.className} light-mode-bg px-[20px]`}>
        <div className="mx-[-20px]">
          <Header />
          <main className="flex min-h-screen flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
