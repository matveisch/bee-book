import styles from './GradientButton.module.scss';
import cart from '@images/cart-icon.svg';
import Image from 'next/image';

function GradientButton(props: { text: string }) {
  const { text } = props;
  return (
    <button className={styles.gradientButton}>
      <Image src={cart} alt={'cart-icon'} />
      {text}
    </button>
  );
}

export default GradientButton;
