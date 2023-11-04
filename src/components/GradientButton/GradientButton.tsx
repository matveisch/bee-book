import styles from './GradientButton.module.scss';
import cart from '@images/cart-icon.svg';
import Image from 'next/image';
import { MouseEventHandler, ReactNode } from 'react';

function GradientButton(props: {
  text: string;
  onclick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'button';
}) {
  const { text, onclick, type } = props;
  return (
    <button className={styles.gradientButton} onClick={onclick} type={type}>
      <Image src={cart} alt={'cart-icon'} />
      {text}
    </button>
  );
}

export default GradientButton;
