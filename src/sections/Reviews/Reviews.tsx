'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import ReviewSlide from '@/components/ReviewSlide/ReviewSlide';
import { Navigation, Controller } from 'swiper';
import styles from './Reviews.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import levPic from '@images/client-pic-one.jpeg';
import leonPic from '@images/client-pic-two.jpeg';
import ilyaPic from '@images/client-pic-three.jpeg';
import reviewPic1 from '@images/reviewPic1.jpg';
import reviewPic2 from '@images/reviewPic2.jpg';
import reviewPic3 from '@images/reviewPic3.jpg';
import reviewPic4 from '@images/reviewPic4.jpg';
import reviewPic5 from '@images/reviewPic5.jpg';
import reviewPic6 from '@images/reviewPic6.jpg';
import reviewPic7 from '@images/reviewPic7.jpg';
import reviewPic8 from '@images/reviewPic8.jpg';
import reviewPic9 from '@images/reviewPic9.jpg';

function Reviews() {
  const [firstSwiper, setFirstSwiper] = useState<any>({});
  const [secondSwiper, setSecondSwiper] = useState<any>({});

  const reviews = [
    {
      img: levPic,
      name: 'לב בילנקין',
      rate: 5,
      date: '21.02.20',
      text: 'תודה רבה חברים! קורס רק לעניין. אין מים במידע! אהבתי את השיטה שלכם וסוף-סוף התחלתי להרוויח מהמסחר😉',
      images: [reviewPic1, reviewPic2, reviewPic3],
    },
    {
      img: leonPic,
      name: 'לאון קפלון',
      rate: 4,
      date: '21.02.20',
      text:
        'מעכשיו אני סוחר רק לפי כסף חכם ואיזורי נזילות כמו שתומר מלמד! שיטה מגניבה בטרוףףף\n' +
        'כל מי שהולך לשאול אותי איפה ללמוד - אני שולח אותם אליכם! אמון תודה על הרווח!',
      images: [reviewPic4, reviewPic5, reviewPic6],
    },
    {
      img: ilyaPic,
      name: 'אליהו טריפונוב',
      rate: 4,
      date: '21.02.20',
      text: 'אני לא האמנתי שאפשר להרוויח מקריפטו ובורסה ככה פשוט. חשבתי שזה אימורים... אבל כשהסבירו לי שזה עניין של שיטה, אסטרטגיית מסחר ונהלים ברורים איך לא להפסיד ואפילו להרוויח - פתחתי עולם של המסחר בשבילי ומתכנן לצאת לחופש כלכלי עד 35. FIRE!!!',
      images: [reviewPic7, reviewPic8, reviewPic9],
    },
  ];

  return (
    <section id="reviews">
      <div id={styles.ratesSection} className={'ratesSection'}>
        <h2 className="h2" id={styles.title}>
          יש סיבה להאמין
        </h2>
        <Swiper
          modules={[Controller, Navigation]}
          onSwiper={(swiper) => swiper && setFirstSwiper(swiper)}
          controller={{ control: secondSwiper }}
          slidesPerView={'auto'}
          initialSlide={1}
          centeredSlides={true}
          loop={false}
          className={'imagesSwiper'}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={`${review.name}-${index}`}>
              <Image
                src={review.img}
                alt="review profile picture"
                className={styles.profilePic}
              />
              <p className="imagesSwiperName">{review.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="swiper-button-prev"
          onClick={() => secondSwiper.slideNext()}
        />
        <div
          className="swiper-button-next"
          onClick={() => secondSwiper.slidePrev()}
        />
        <Swiper
          modules={[Controller, Navigation]}
          onSwiper={(swiper) =>
            swiper != undefined ? setSecondSwiper(swiper) : console.log(swiper)
          }
          controller={{ control: firstSwiper }}
          centeredSlides={true}
          slidesPerView={1}
          loop={false}
          spaceBetween={0}
          navigation={{
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev',
          }}
          className={`${styles.mySwiper} productSwiper`}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.name}>
              <ReviewSlide
                stars={review.rate}
                text={review.text}
                date={review.date}
                images={review.images}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default Reviews;
