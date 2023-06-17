import styles from './BuyBook.module.scss';
import cover from '@images/book-cover.svg';
import Image from 'next/image';
import GradientButton from '@/components/GradientButton/GradientButton';
import ShadowButton from '@/components/ShadowButton/ShadowButton';

function BuyBook() {
  return (
    <div className={styles.buyBook} id='book'>
      <div className={styles.imgWrapper}>
        <Image className={styles.bookImage} src={cover} alt={'book-cover'} />
      </div>
      <div>
        <h2>תשקיע ברווחים</h2>
        <p>
          האם אתה מוכן ללמוד איך להרוויח כסף בשווקים הפיננסיים עם אסטרטגיות
          מוכחות ויעילות? ספר דפוסי המסחר שלנו יספק לך את הידע והכלים הדרושים לך
          כדי להשיג עצמאות כלכלית.
        </p>
        <div className={styles.buttonsWrapper}>
          <GradientButton text={'לקנות עכשיו'} />
          <ShadowButton text={'אזרח ישראלי? קבל חינם'} />
        </div>
      </div>
    </div>
  );
}

export default BuyBook;
