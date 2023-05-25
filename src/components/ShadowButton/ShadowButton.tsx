import styles from './ShadowButton.module.scss';

function ShadowButton(props: { text: string }) {
  const { text } = props;

  return <button className={styles.shadowButton}>{text}</button>;
}

export default ShadowButton;
