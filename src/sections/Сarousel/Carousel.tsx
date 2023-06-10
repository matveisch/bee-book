'use client';
import styles from './Carousel.module.scss';
import ParallaxText from '@/components/ParallaxText/ParallaxText';
import Image from 'next/image';
import graph1 from '@images/image 36.png';
import graph2 from '@images/image 37.png';
import graph3 from '@images/image 38.png';
import graph4 from '@images/image 39.png';
import graph5 from '@images/image 40.png';
import graph6 from '@images/image 41.png';

function Carousel() {
  return (
    <section className={styles.carousel}>
      <div className={styles.wrapper}>
        <ParallaxText baseVelocity={-5}>תבניות</ParallaxText>
        <div className={styles.images}>
          <Image src={graph1} alt="graph pic" />
          <Image src={graph2} alt="graph pic" />
          <Image src={graph3} alt="graph pic" />
          <Image src={graph4} alt="graph pic" />
          <Image src={graph5} alt="graph pic" />
          <Image src={graph6} alt="graph pic" />
        </div>
        <ParallaxText baseVelocity={5}>תבניות</ParallaxText>
      </div>
      <div className={styles.gradientBg}></div>
    </section>
  );
}

export default Carousel;
