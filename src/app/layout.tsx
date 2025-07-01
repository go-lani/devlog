import '@/styles/globals.css';
import { ModalProvider } from '@lani.ground/react-modal';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';

import { splashScreens } from '@/config/splash-screens';

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
  metadataBase: new URL(`${process.env.CLIENT_URL}`),
  title: {
    default: 'Lani.log',
    template: 'Lani.log | %s',
  },
  description: "Developer Lani's log",
  openGraph: {
    type: 'website',
    title: 'Lani.log',
    description: "Developer Lani's log",
    images: '/og-image.jpg',
  },
  icons: {
    shortcut: ['/assets/images/icons/icon.png'],
    apple: ['/assets/images/icons/icon.png'],
    icon: ['/favicon.ico'],
  },
  manifest: '/manifest.ts',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Lani.log',
    startupImage: splashScreens,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Script
        id="register-sw"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('ServiceWorker registration successful');
                  },
                  function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  }
                );
              });
            }
          `,
        }}
      />
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
          <ModalProvider>{children}</ModalProvider>
        </div>
      </body>
    </html>
  );
}
