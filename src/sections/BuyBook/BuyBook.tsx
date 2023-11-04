'use client';

import styles from './BuyBook.module.scss';
import cover from '@images/book-cover.svg';
import Image from 'next/image';
import GradientButton from '@/components/GradientButton/GradientButton';
import ShadowButton from '@/components/ShadowButton/ShadowButton';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const BOOK_CODE = '1234';

function BuyBook(props: { dict: any }) {
  const { dict } = props;
  const router = useRouter();
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function handleBook() {
    if (input === BOOK_CODE) {
      process.env.BOOK_LINK && router.push(process.env.BOOK_LINK);
    } else {
      setErrorMessage('Wrong code');
    }
  }

  return (
    <div className={styles.buyBook} id="book">
      <div className={styles.imgWrapper}>
        <Image className={styles.bookImage} src={cover} alt={'book-cover'} />
      </div>
      <div>
        <h2>{dict.buyBook.invest}</h2>
        <p>{dict.buyBook.ruready}</p>
        <div className={styles.buttonsWrapper}>
          <div className={styles.inputContainer}>
            <input
              placeholder="Enter your code"
              className={styles.codeInput}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <p className={styles.errorMessage}>{errorMessage}</p>
          </div>
          <GradientButton
            text={dict.buyBook.buyNow}
            type="button"
            onclick={handleBook}
          />
          {/* <ShadowButton text={dict.buyBook.israeli} /> */}
        </div>
      </div>
    </div>
  );
}

export default BuyBook;
