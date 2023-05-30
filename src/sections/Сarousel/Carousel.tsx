'use client';
import styles from './Carousel.module.scss';
import ParallaxText from '@/components/ParallaxText/ParallaxText';

function Carousel() {
  return (
    <section>
      <ParallaxText baseVelocity={-5}>תבניות</ParallaxText>
      <ParallaxText baseVelocity={5}>תבניות</ParallaxText>
    </section>
  );
}

export default Carousel;
