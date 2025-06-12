import styles from "./Timeline.module.css";

const Timeline = () => {
  return (
    <section className={styles.sectionCont}>
      <h1>План мероприятия</h1>
      <div className={styles.timeLineCont}>
        <div className={styles.timeLineItem}>
          <div className={styles.timeLineIcon} />
          <div className={styles.timeLineTime}>14:00</div>
          <div className={styles.timeLineTimeDesc}>Роспись (ЗАГС)</div>
        </div>
        <div className={styles.timeLineItem}>
          <div className={styles.timeLineIcon} />
          <div className={styles.timeLineTime}>15:00</div>
          <div className={styles.timeLineTimeDesc}>
            Трансфер от ЗАГСа до места торжества
          </div>
        </div>
        <div className={styles.timeLineItem}>
          <div className={styles.timeLineIcon} />
          <div className={styles.timeLineTime}>16:00</div>
          <div className={styles.timeLineTimeDesc}>Банкет</div>
        </div>
        <div className={styles.timeLineItem}>
          <div className={styles.timeLineIcon} />
          <div className={styles.timeLineTime}>22:00</div>
          <div className={styles.timeLineTimeDesc}>Завершение мероприятия</div>
        </div>
        <div className={styles.timeLineItem}>
          <div className={styles.timeLineIcon} />
          <div className={styles.timeLineTime}>22:10</div>
          <div className={styles.timeLineTimeDesc}>
            Трансфер (развезет вас по домам)
          </div>
        </div>
      </div>
    </section>
  );
};

export { Timeline };
