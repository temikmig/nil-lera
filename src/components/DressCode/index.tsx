import styles from "./DressCode.module.css";

const DressCode = () => {
  return (
    <section className={styles.sectionCont}>
      <h1>Дресс-код</h1>
      <p>
        Мы выбрали для нашего дня любимые цвета и будем рады, если вы захотите
        поддержать эту атмосферу своими нарядами в данных оттенках.
      </p>
      <div className={styles.dressCodeCont}>
        <div className={`${styles.dressCodeItem} ${styles.item_1}`} />
        <div className={`${styles.dressCodeItem} ${styles.item_2}`} />
        <div className={`${styles.dressCodeItem} ${styles.item_3}`} />
        <div className={`${styles.dressCodeItem} ${styles.item_4}`} />
        <div className={`${styles.dressCodeItem} ${styles.item_5}`} />
        <div className={`${styles.dressCodeItem} ${styles.item_6}`} />
        <div className={`${styles.dressCodeItem} ${styles.item_7}`} />
        <div className={`${styles.dressCodeItem} ${styles.item_8}`} />
        <div className={`${styles.dressCodeItem} ${styles.item_9}`} />
      </div>
      <p>
        Но главное для нас — чтобы вам было комфортно. Дресскод — это лишь
        настроение, а не правило.
      </p>
    </section>
  );
};

export { DressCode };
