import { Title, LogoImg } from './styles.js';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <LogoImg src={'/images/logo.svg'} />
      </Link>
      <Title>Proyecto de Open politica</Title>
    </header>
  );
};

export default Header;
