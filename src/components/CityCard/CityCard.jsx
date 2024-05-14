import styles from './CityCard.module.css';
import WeatherTypeSvg from './../../assets/weather-type/day-cloudy.svg';

const CityCard = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['top']}>
        <h2 className={styles['city']}>Москва</h2>
        <time dateTime="01-06" className={styles['text']}>
          Суббота, 06 января
        </time>
        <time dateTime="11h 29m" className={styles['text']}>
          11:29
        </time>
      </div>
      <p className={styles['temperature']}>-7°</p>
      <div className={styles['bottom']}>
        <figure className={styles['inner']}>
          <img src={WeatherTypeSvg} alt="Тип погоды" />
          <figcaption className={styles['text']}>Облачно</figcaption>
        </figure>
        <p className={styles['text']}>Ощущается как -11°</p>
      </div>
    </div>
  );
};

export default CityCard;
