import IMAGE_NAMES from '../../constants/IMAGE_NAMES';
import Icon from '../Icon/Icon';
import styles from './CityCard.module.css';

export function CityCard() {
  return (
    <section className={styles['weather-today']}>
      <div className={styles['weather-today-block']}>
        <p className={styles['weather-today__region']}>Москва</p>
        <p className={styles['weather-today__date']}>Суббота, 06 января</p>
        <p className={styles['weather-today__time']}>11:29</p>
      </div>

      <div className={styles['weather-today-block']}>
        <p className={styles['weather-today__temperature']}>-7</p>
      </div>

      <div className={styles['weather-today-block']}>
        <div className={styles['weather-today__weather-type']}>
          <Icon
            name={IMAGE_NAMES.dayBrokenClouds}
            className={styles['weather-today__weather-type-img']}
          />
          <p className={styles['weather-today__weather-type-text']}>Облачно</p>
        </div>
        <p className={styles['weather-today__weather-feels']}>
          Ощущается как -11°
        </p>
      </div>
    </section>
  );
}
