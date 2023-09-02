import localFont from 'next/font/local';
import type { Metadata } from 'next';
import '@/styles/globals.css';

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

export const metadata: Metadata = {
  title: {
    default: '라니.로그',
    template: '라니.로그 | %s',
  },
  description: '프론트엔드 개발자 라니.로그',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${spoqaSans.className} px-[20px]`}>
        <div id="main-root" className="mx-[-20px]">
          {children}
        </div>
        <div id="modal-root" />
      </body>
    </html>
  );
}
