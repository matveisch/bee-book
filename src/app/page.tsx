import 'normalize.css/normalize.css';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import Hero from '@/sections/Hero/Hero';
import Carousel from '@/sections/Сarousel/Carousel';
import Description from '@/sections/Description/Description';
import BuyBook from '@/sections/BuyBook/BuyBook';
import Reviews from '@/sections/Reviews/Reviews';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Carousel />
      <Description />
      <BuyBook />
      <Reviews />
      <Footer />
    </main>
  );
}
