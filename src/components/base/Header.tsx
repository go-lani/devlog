import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="container-layout border-style flex justify-center border-y bg-zinc-800">
      <div className="content-layout border-style flex items-center justify-between border-x">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
