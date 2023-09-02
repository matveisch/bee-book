import styles from './Hero.module.scss';
import image from '@images/hero-book.svg';
import Image from 'next/image';
import GradientButton from '@/components/GradientButton/GradientButton';
import ShadowButton from '@/components/ShadowButton/ShadowButton';

function Hero(props: { dict: any }) {
  const { dict } = props;

  return (
    <section className={styles.hero}>
      <aside>
        <h1 dangerouslySetInnerHTML={{ __html: dict.hero.knowledge }} />
        <p>{dict.hero.description}</p>
        <div className={styles.buttonsWrapper}>
          <GradientButton text={dict.hero.buy} />
          {/* <ShadowButton text={dict.hero.israeli} /> */}
        </div>
      </aside>
      <Image src={image} alt={'the book'} className={styles.image} />
    </section>
  );
}

export default Hero;
