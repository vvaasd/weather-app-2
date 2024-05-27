import { Icon } from '../icon/Icon';
import { ProgressBar } from '../progressBar/ProgressBar';

import styles from './card.module.css';

const Card = ({
  title,
  icon,
  measure = '',
  progress,
  value,
  extraStyles = false,
  addictional,
}) => {
  let progressInputValue = value;
  if (isNaN(progressInputValue)) {
    progressInputValue = 0;
  }
  while (progressInputValue > 100) {
    progressInputValue /= 10;
  }

  let cardValue = '—';
  if (value) {
    cardValue = value;
    if (typeof cardValue === 'number') {
      cardValue = Math.round(cardValue);
    }
    if (measure) {
      cardValue += ` ${measure}`;
    }
  }

  return (
    <li className={styles.card}>
      <h3 className={styles.cardHeader}>{title}</h3>
      <Icon icon={icon} />
      <p className={styles.cardDegree}>{cardValue}</p>
      <div className={styles.visualDegree}>
        {progress && (
          <ProgressBar
            current={progressInputValue}
            type={extraStyles ? 'dark' : 'default'}
          />
        )}
        <div className={styles.visualDegreeValues}>
          {addictional.minValue ? (
            <>
              <p className={styles.visualDegreeValuesMin}>
                {addictional.minValue}
              </p>
              <p className={styles.visualDegreeValuesMax}>
                {addictional.maxValue}
              </p>
            </>
          ) : (
            <p className={styles.visualDegreeValuesComment}>{addictional}</p>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;
