import styles from './SliderCard.module.css';

const SliderCard = ({
  title,
  dateTime,
  day,
  image,
  temperature,
  temperatureMax,
}) => {
  let temperatureText;
  if (temperatureMax) {
    temperatureText = `От ${temperature}° до ${temperatureMax}°`;
  } else {
    temperatureText = `${temperature}°`;
  }

  let dateTimeText;
  if (day) {
    dateTimeText = `${day}, ${dateTime}°`;
  } else {
    dateTimeText = dateTime;
  }

  return (
    <div className={styles['card']}>
      <time dateTime={dateTime} className={styles['text']}>
        {dateTimeText}
      </time>
      <img className={styles['img']} src={image} alt={title} />
      <p className={styles['text']}>{temperatureText}</p>
    </div>
  );
};

export default SliderCard;
