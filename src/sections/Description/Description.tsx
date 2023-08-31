import styles from './Description.module.scss';

function Description(props: { dict: any }) {
  const { dict } = props;

  return (
    <section className={styles.description}>
      <p dangerouslySetInnerHTML={{ __html: dict.description.text }} />
    </section>
  );
}

export default Description;
