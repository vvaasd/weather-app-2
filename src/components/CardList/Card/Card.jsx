import Icon from '../../Icon/Icon';
import ProgressBar from '../../ProgressBar/ProgressBar';
import styles from './Card.module.css';

export function Card({
  name,
  title,
  value,
  measure = '',
  hasProgress,
  addictional,
}) {
  let valueWithMeasure = value;
  if (measure) {
    valueWithMeasure += ` ${measure}`;
  }

  let addictionalElement;
  if (addictional) {
    addictionalElement = (
      <div className={styles.comment}>
        <p className={styles.commentText}>{addictional}</p>
      </div>
    );
  } else {
    addictionalElement = (
      <div className={styles.percent}>
        <p className={styles.commentMin}>0%</p>
        <p className={styles.commentMax}>100%</p>
      </div>
    );
  }

  return (
    <li className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div>
        <Icon name={name} className={styles.img} />
      </div>
      <p className={styles.value}>{valueWithMeasure}</p>
      <div className={styles['weather-details-card__visual-degree']}>
        {hasProgress && <ProgressBar value={+value} type={name} />}
        {addictionalElement}
      </div>
    </li>
  );
}
