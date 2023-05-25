import 'normalize.css/normalize.css';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import Hero from '@/sections/Hero/Hero';
import Graphs from '@/sections/Graphs/Graphs';
import Description from '@/sections/Description/Description';
import BuyBook from '@/sections/BuyBook/BuyBook';
import Reviews from '@/sections/Reviews/Reviews';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Graphs />
      <Description />
      <BuyBook />
      <Reviews />
      <Footer />
    </main>
  );
}
