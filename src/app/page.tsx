import Footer from '@/components/base/Footer';
import Header from '@/components/base/Header';

export default function App() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <section className="container-layout flex h-screen w-full justify-center">
          <div className="content-layout border-style border-x">
            <p>next content?</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
