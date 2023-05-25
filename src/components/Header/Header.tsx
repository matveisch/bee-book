import styles from './Header.module.scss';
import logo from '../../../public/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img className={styles.image} src={logo.src} />
          <span>BeeTrade</span>
        </div>
      </div>
      <div className={styles.menu}>
        <a>ספר</a>
        <a>ביקורות</a>
      </div>
      <nav></nav>
    </header>
  );
}

export default Header;
