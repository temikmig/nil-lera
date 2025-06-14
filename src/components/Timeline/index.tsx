import styles from "./Timeline.module.css";

const Timeline = () => {
  return (
    <section className={styles.sectionCont}>
      <h1>План мероприятия</h1>
      <div className={styles.timeLineCont}>
        <div className={styles.timeLineItem}>
          <div className={styles.timeLineIcon} />
          <div className={styles.timeLineDesc}>
            <div className={styles.timeLineTime}>14:00</div>
            <div className={styles.timeLineTimeName}>Свадебная церемония</div>
            <div className={styles.timeLineTimeDesc}>
              На всякий случай приготовьте носовые платочки для трогательного
              момента
            </div>
          </div>
        </div>
        <div className={styles.timeLineItem}>
          <div className={styles.timeLineIcon} />
          <div className={styles.timeLineDesc}>
            <div className={styles.timeLineTime}>15:00</div>
            <div className={styles.timeLineTimeName}>
              Трансфер от ЗАГСа до места торжества
            </div>
            <div className={styles.timeLineTimeDesc}>
              Быстро и комфортно доедем до места
            </div>
          </div>
        </div>
        <div className={styles.timeLineItem}>
          <div className={styles.timeLineIcon} />
          <div className={styles.timeLineDesc}>
            <div className={styles.timeLineTime}>16:00</div>
            <div className={styles.timeLineTimeName}>Праздничный банкет</div>
            <div className={styles.timeLineTimeDesc}>
              Время вкусной еды, танцев и развлечений
            </div>
          </div>
        </div>
        <div className={styles.timeLineItem}>
          <div className={styles.timeLineIcon} />
          <div className={styles.timeLineDesc}>
            <div className={styles.timeLineTime}>22:00</div>
            <div className={styles.timeLineTimeName}>
              Завершение мероприятия
            </div>
            <div className={styles.timeLineTimeDesc}>
              Даже такой прекраный вечер закончится
            </div>
          </div>
        </div>
        <div className={styles.timeLineItem}>
          <div className={styles.timeLineIcon} />
          <div className={styles.timeLineDesc}>
            <div className={styles.timeLineTime}>22:10</div>
            <div className={styles.timeLineTimeName}>
              Трансфер, развезет Вас по домам
            </div>
            <div className={styles.timeLineTimeDesc}>
              С комфортов доставим вас до дома
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Timeline };
