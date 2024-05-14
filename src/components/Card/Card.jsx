import styles from './Card.module.css';

const Card = ({
  title,
  value,
  hasProgressBar,
  measurement,
  meaning,
  meaningEnd,
  hasGradient,
}) => {
  let valuePercentage = value;
  while (valuePercentage > 100) {
    valuePercentage /= 10;
  }
  const position = Math.round(valuePercentage);

  let progressBarElement = null;
  if (hasProgressBar) {
    progressBarElement = (
      <div className={styles['progress-bar-wrapper']}>
        <input
          type="range"
          className={styles['progress-bar']}
          name={title}
          min="1"
          max="100"
          value={valuePercentage}
          readOnly
          style={{
            mask: `radial-gradient(
            circle at calc(${position}%),
            transparent clamp(0.313rem, 0.78vw, 0.375rem),
            black clamp(0.313rem, 0.78vw, 0.375rem),
            black clamp(0.313rem, 0.78vw, 0.375rem)
          )`,
            background: hasGradient
              ? 'radial-gradient(50% 2344966.00% at 50% 50%, rgba(84, 84, 84, 0.4) 0%, rgba(138, 138, 138, 0.4) 45.12%, rgb(218, 218, 218) 100%, rgba(218, 218, 218, 0.4) 100%)'
              : '',
          }}
        />
        <div
          className={styles['ellipse']}
          style={{
            left: `calc(${position}% - clamp(0.188rem, -0.125rem + 0.78vw, 0.25rem))`,
          }}
        ></div>
      </div>
    );
  }

  const defaultImgPath = '/cards-icons';
  let imgSrc = defaultImgPath;
  if (title === 'Влажность') {
    imgSrc += '/humidity.svg';
  } else if (title === 'Давление') {
    imgSrc += '/barometer.svg';
  } else if (title === 'Видимость') {
    imgSrc += '/visibility.svg';
  } else if (title === 'Рассвет') {
    imgSrc += '/sunrise.svg';
  } else if (title === 'Закат') {
    imgSrc += '/sunset.svg';
  } else if (title === 'Сила ветра') {
    imgSrc += '/direction.svg';
  }

  return (
    <li className={styles['card']}>
      <h2 className={styles['title']}>{title}</h2>
      <img className={styles['img']} src={imgSrc} alt={title} />
      <p className={styles['degree']}>{`${value} ${measurement}`}</p>
      {progressBarElement}
      <div className={styles['box']}>
        <p className={styles['indicator']}>{meaning}</p>
        {meaningEnd && <p className={styles['indicator']}>{meaningEnd}</p>}
      </div>
    </li>
  );
};

export default Card;
