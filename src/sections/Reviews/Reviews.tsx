'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import ReviewSlide from '@/components/ReviewSlide/ReviewSlide';
import { Navigation, Controller } from 'swiper';
import styles from './Reviews.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import reviewen1 from '@images/reviewen1.jpg';
import reviewen2 from '@images/reviewen2.jpg';
import reviewen3 from '@images/reviewen3.jpg';
import reviewru1 from '@images/reviewru1.jpg';
import reviewru2 from '@images/reviewru2.jpg';
import reviewru3 from '@images/reviewru3.jpg';
import reviewar1 from '@images/reviewar1.jpg';
import reviewar2 from '@images/reviewar2.jpg';
import reviewar3 from '@images/reviewar3.jpg';
import reviewPic1 from '@images/reviewPic1.jpg';
import reviewPic2 from '@images/reviewPic2.jpg';
import reviewPic3 from '@images/reviewPic3.jpg';
import reviewPic4 from '@images/reviewPic4.jpg';
import reviewPic5 from '@images/reviewPic5.jpg';
import reviewPic6 from '@images/reviewPic6.jpg';
import reviewPic7 from '@images/reviewPic7.jpg';
import reviewPic8 from '@images/reviewPic8.jpg';
import reviewPic9 from '@images/reviewPic9.jpg';

function Reviews(props: { dict: any; lang: string }) {
  const { dict, lang } = props;
  const [firstSwiper, setFirstSwiper] = useState<any>({});
  const [secondSwiper, setSecondSwiper] = useState<any>({});

  const reviews = [
    {
      img: lang == 'ar' ? reviewar1 : lang == 'en' ? reviewen1 : reviewru1,
      name: dict.reviews.firstName,
      rate: 5,
      date: '21.02.20',
      text: dict.reviews.firstRev,
      images: [reviewPic1, reviewPic2, reviewPic3],
    },
    {
      img: lang == 'ar' ? reviewar2 : lang == 'en' ? reviewen2 : reviewru2,
      name: dict.reviews.secondName,
      rate: 4,
      date: '21.02.20',
      text: dict.reviews.secondRev,
      images: [reviewPic4, reviewPic5, reviewPic6],
    },
    {
      img: lang == 'ar' ? reviewar3 : lang == 'en' ? reviewen3 : reviewru3,
      name: dict.reviews.thirdName,
      rate: 4,
      date: '21.02.20',
      text: dict.reviews.thisrRev,
      images: [reviewPic7, reviewPic8, reviewPic9],
    },
  ];

  return (
    <section id="reviews">
      <div id={styles.ratesSection} className={'ratesSection'}>
        <h2 className="h2" id={styles.title}>
          {dict.reviews.reason}
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
          onSwiper={(swiper) => swiper != undefined && setSecondSwiper(swiper)}
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
