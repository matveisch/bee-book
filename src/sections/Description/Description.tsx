import styles from './Description.module.scss';



function Description() {
  return (
    <section className={styles.description}>
      <p>
      ספר דפוסי המסחר שלנו אינו רק אוסף של אסטרטגיות, הוא <span className={styles.gradient}> מדריך שלם </span>  למסחר מוצלח בשווקים הפיננסיים. בעזרתו תקבלו גישה לסודות של סוחרים מקצועיים ותלמדו
<span className={styles.gradient}> איך להרוויח כסף בבורסה</span> כמשקיע מנוסה.
      </p>
    </section>
  );
}

export default Description;
