import styles from "./Location.module.css";

const Location = () => {
  return (
    <section className={styles.sectionCont}>
      <h1>Локация</h1>
      <p>Панорамная беседка "Black River"</p>
      <div>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=40.106263%2C64.548207&mode=search&oid=84270067773&ol=biz&z=13.35"
          width="560"
          height="400"
        ></iframe>
      </div>
    </section>
  );
};

export { Location };
