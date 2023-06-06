import React from 'react';
import Image from 'next/image';
import styles from './Reviews.module.scss';
import imagy from '@images/image 36.png';
import starFilled from '@images/starFilled.svg';
import starEmpty from '@images/starEmpty.svg';
interface Props {
  stars: number;
  text: string;
  date: string;
  images: [];
}
const Reviews = ({ stars, text, date, images }: Props) => {
  function starFun(star: number) {
    let starsArr = [];
    for (let j = 0; j < 5 - star; j++) {
      starsArr.push(<Image src={starEmpty} alt="star filled" />);
    }
    for (let i = 0; i < star; i++) {
      starsArr.push(<Image src={starFilled} alt="star filled" />);
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
        <Image src={imagy} alt="" />
        <Image src={imagy} alt="" />
        <Image src={imagy} alt="" />
      </div>
    </div>
  );
};
export default Reviews;
