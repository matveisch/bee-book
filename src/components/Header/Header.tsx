import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@images/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <Link href="#book" className={styles.link}>
          ספר
        </Link>
        <Link href="#reviews" className={styles.link}>
          ביקורות
        </Link>
      </nav>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={48} height={48} />
        <span>BeeTrade</span>
      </div>
    </header>
  );
}

export default Header;
