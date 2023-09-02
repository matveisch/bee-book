import styles from './BuyBook.module.scss';
import cover from '@images/book-cover.svg';
import Image from 'next/image';
import GradientButton from '@/components/GradientButton/GradientButton';
import ShadowButton from '@/components/ShadowButton/ShadowButton';

function BuyBook(props: { dict: any }) {
  const { dict } = props;

  return (
    <div className={styles.buyBook} id="book">
      <div className={styles.imgWrapper}>
        <Image className={styles.bookImage} src={cover} alt={'book-cover'} />
      </div>
      <div>
        <h2>{dict.buyBook.invest}</h2>
        <p>{dict.buyBook.ruready}</p>
        <div className={styles.buttonsWrapper}>
          <GradientButton text={dict.buyBook.buyNow} />
          {/* <ShadowButton text={dict.buyBook.israeli} /> */}
        </div>
      </div>
    </div>
  );
}

export default BuyBook;
