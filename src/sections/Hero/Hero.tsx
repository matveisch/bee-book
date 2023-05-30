import styles from './Hero.module.scss';
import image from '@images/hero-book.svg';
import Image from 'next/image';
import GradientButton from '@/components/GradientButton/GradientButton';
import ShadowButton from '@/components/ShadowButton/ShadowButton';

function Hero() {
  return (
    <section className={styles.hero}>
      <aside>
        <h1>
          כל הקסם
          <br />— בידה
        </h1>
        <p>
          קורס מתחיליקורס מתחילים מ0-עד דבש קורס מתחילים מ0-עד דבש vvקורס
          מתחילים מ0-עד דבש
        </p>
        <div className={styles.buttonsWrapper}>
          <GradientButton text={'רכישה'} />
          <ShadowButton text={'אזרח ישראלי? קבל חינם'} />
        </div>
      </aside>
      <Image src={image} alt={'the book'} className={styles.image} />
    </section>
  );
}

export default Hero;
