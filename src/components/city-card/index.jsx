import cloudy from "../../assets/img/04d.svg";
import clsx from "../../utils/clsx";
import styles from "./city-card.module.css";

const CityCard = () => {
  return (
    <section className={styles.citycard}>
      <h1 className={clsx("title section-title", styles.city)}>
        Кременчуг-константиновское
      </h1>
      <span className={styles.date}>
        Суббота, 06 января
      </span>
      <span className={styles.time}>
        11:29
      </span>
      <span className={styles.tempFact}>
        -7°
      </span>
      <span className={styles.condition}>
        <img src={cloudy} alt="облака" />
        Облачно с прояснениями
      </span>
      <span className={styles.tempFeelsLike}>
        Ощущается как -11°
      </span>
    </section>
  );
}

export default CityCard;
