import styles from './Footer.module.scss';
import Image from 'next/image';
import tiktok from '@images/tiktok1.svg';
import insta from '@images/insta1.svg';
import mail from '@images/mail1.svg';
import telegram from '@images/telegram1.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <a href='https://www.tiktok.com/@bee_trade'>
          <Image src={tiktok} alt="TikTok" />
        </a>
        {/*<a href=''>*/}
        {/*  <Image src={insta} alt="Instagram" />*/}
        {/*</a>*/}
        {/*<a href=''> */}
        {/*  <Image src={mail} alt="Mail" />*/}
        {/*</a>*/}
        <a href='https://t.me/beetradebee'>
          <Image src={telegram} alt="Telegram" />
        </a>
      </div>
      <p>{new Date().getFullYear()} BeeTrade ©</p>
    </footer>
  );
}

export default Footer;
