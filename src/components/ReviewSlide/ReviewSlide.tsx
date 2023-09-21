import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './ReviewSlide.module.scss';
import starFilled from '@images/starFilled.svg';
import starEmpty from '@images/starEmpty.svg';
interface Props {
  stars: number;
  text: string;
  date: string;
  images: StaticImageData[];
}
const ReviewSlide = ({ stars, text, date, images }: Props) => {
  function starFun(star: number) {
    let starsArr = [];
    for (let j = 0; j < 5 - star; j++) {
      starsArr.push(
        <Image src={starEmpty} alt="star filled" key={`star-j-${j}`} />
      );
    }
    for (let i = 0; i < star; i++) {
      starsArr.push(
        <Image src={starFilled} alt="star filled" key={`star-i-${i}`} />
      );
    }

    return starsArr;
  }

  return (
    <div id={styles.reviewWrapper}>
      <div id={styles.starsAndDate}>
        <p id={styles.date}>{date}</p>

        <div id={styles.stars}>{starFun(stars)}</div>
      </div>

      <p id={styles.reviewText}>{text}</p>
      <div id={styles.resultImages}>
        {images.map((image, index) => (
          <Image src={image} alt="review image" key={`image-${index}`} />
        ))}
      </div>
    </div>
  );
};
export default ReviewSlide;
