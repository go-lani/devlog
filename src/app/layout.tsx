import localFont from 'next/font/local';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import Script from 'next/script';

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
      {process.env.NODE_ENV !== 'development' && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}', {
                page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      )}
      <body className={`${spoqaSans.className} px-[20px]`}>
        <div id="main-root" className="mx-[-20px]">
          {children}
        </div>
        <div id="modal-root" />
      </body>
    </html>
  );
}
