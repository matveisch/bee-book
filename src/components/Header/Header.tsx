'use client';

import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@images/logo.png';
import languageIcon from '@images/labguageIcon.svg';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const languageVariants = {
  open: {},
  closed: {},
};

const ulVariants = {
  open: {
    display: 'flex',
  },
  closed: {
    display: 'none',
  },
};

function Header(props: { dict: any; lang: string }) {
  const { dict, lang } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const langButton = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      console.log(langButton.current);

      langButton.current && !langButton.current.contains(event.target) && isOpen
        ? setIsOpen(false)
        : undefined;
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <motion.div
          initial={'closed'}
          animate={isOpen ? 'open' : 'closed'}
          variants={languageVariants}
          className={styles.languageWrapper}
        >
          <p ref={langButton} onClick={() => setIsOpen(!isOpen)}>
            <Image src={languageIcon} alt="language icon" />
            Language
          </p>
          <motion.ul variants={ulVariants}>
            <li>
              <Link href="/en" locale="en">
                English
              </Link>
            </li>
            <li>
              {' '}
              <Link href="/ru" locale="ru">
                Russian
              </Link>
            </li>
            <li>
              {' '}
              <Link href="/ar" locale="ar">
                Arabic
              </Link>
            </li>
          </motion.ul>
        </motion.div>
        <Link href={`/${lang}//#book`} className={styles.link}>
          {dict.header.book}
        </Link>
        <Link href={`/${lang}//#reviews`} className={styles.link}>
          {dict.header.reviews}
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
