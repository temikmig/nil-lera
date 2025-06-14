import { useEffect, useState } from "react";
import styles from "./Timer.module.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = new Date("2025-09-09T14:00:00");

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Функция для склонения слов
  const declension = (number: number, titles: [string, string, string]) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  };

  // Функция обновления таймера
  const updateTimer = () => {
    const now = new Date().getTime();
    const difference = TARGET_DATE.getTime() - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      return true;
    }
    return false;
  };

  useEffect(() => {
    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, []);

  // Если время вышло, не рендерим компонент
  if (Object.values(timeLeft).every((val) => val === 0)) return null;

  // Формируем массив элементов таймера
  const timerElements = [
    {
      value: timeLeft.days,
      titles: ["день", "дня", "дней"] as [string, string, string],
      show: timeLeft.days > 0,
    },
    {
      value: timeLeft.hours,
      titles: ["час", "часа", "часов"] as [string, string, string],
      show: timeLeft.hours > 0,
    },
    {
      value: timeLeft.minutes,
      titles: ["минута", "минуты", "минут"] as [string, string, string],
      show: timeLeft.minutes > 0,
    },
    {
      value: timeLeft.seconds,
      titles: ["секунда", "секунды", "секунд"] as [string, string, string],
      show: timeLeft.seconds > 0,
    },
  ].filter((item) => item.show);

  return (
    <section className={styles.sectionCont}>
      <h1>До свадьбы осталось</h1>
      <div className={styles.timerCont}>
        {timerElements.map((item, index) => (
          <div key={index} className={styles.timerItem}>
            <div className={styles.timerCount}>{item.value}</div>
            <div className={styles.timerWrap}>
              {declension(item.value, item.titles)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Timer };
