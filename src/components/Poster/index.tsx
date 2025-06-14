import styles from "./Poster.module.css";

interface P {
  src: string;
}

const Poster = ({ src }: P) => {
  return (
    <div
      className={styles.posterCont}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
};

export { Poster };
