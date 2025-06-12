import styles from "./MainPoster.module.css";

const MainPoster = () => {
  return (
    <div className={styles.mainPosterCont}>
      <h1>Нил и Валерия</h1>
      <h2>09.09.2025</h2>
      <p>"Просто такая сильная любовь"</p>
    </div>
  );
};

export { MainPoster };
