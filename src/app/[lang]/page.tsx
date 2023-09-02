import 'normalize.css/normalize.css';
import styles from './page.module.scss';
import Header from '@/components/Header/Header';
import Hero from '@/sections/Hero/Hero';
import Carousel from '@/sections/Сarousel/Carousel';
import Description from '@/sections/Description/Description';
import BuyBook from '@/sections/BuyBook/BuyBook';
import Reviews from '@/sections/Reviews/Reviews';
import Footer from '@/components/Footer/Footer';
import { getDictionary } from './dictionaries';

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <main
      className={styles.main}
      style={lang === 'ar' ? { direction: 'rtl' } : undefined}
    >
      <Header dict={dict} lang={lang} />
      <Hero dict={dict} />
      <Carousel />
      <Description dict={dict} />
      <BuyBook dict={dict} />
      <Reviews dict={dict} />
      <Footer />
    </main>
  );
}
