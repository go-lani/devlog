import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="flex justify-center border-b-2 container-layout border-style">
      <div className="flex justify-between items-center content-layout border-x-2 border-style">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
