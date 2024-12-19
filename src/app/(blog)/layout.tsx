import Footer from '@/components/base/Footer';
import Header from '@/components/base/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">{children}</main>
      <Footer />
    </>
  );
}
