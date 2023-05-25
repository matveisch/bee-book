import styles from './Header.module.scss';
import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
// import logo from '@public/images/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
        <Image
           src={logo}
           alt='logo'
           width={48}
           height={48}
           />
          <span>BeeTrade</span>
        </div>
      </div>
      <div className={styles.menu}>
      <Link href='/' className={styles.link} >ספר</Link>
        <Link href='/' className={styles.link}>ביקורות</Link>
      </div>
      <nav></nav>
    </header>
  );
}

export default Header;
