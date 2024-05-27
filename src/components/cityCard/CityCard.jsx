import styles from './cityCard.module.css';
import Img from '../../ui/img/Img';
import cloudy from '../../img/weather-type/day-cloudy.svg';
import getTimeByTimezone from '../../utils/getTimeByTimezone';

import upperCaseFirst from '../../utils/upperCaseFirst';
import formatTemp from '../../utils/formatTemp';
import { useContext } from 'react';
import { PageContext } from '../../context/context';

const Today = () => {
  const {
    timezoneFromData,
    tempFromData,
    tempFeelsFromData,
    weatherTypeStrFromData,
    cityNameFromData,
  } = useContext(PageContext);

  const timeWithTimezone = getTimeByTimezone(timezoneFromData);

  const date = upperCaseFirst(
    Intl.DateTimeFormat('ru', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
    }).format(timeWithTimezone)
  );

  const time = Intl.DateTimeFormat('ru', {
    hour: 'numeric',
    minute: 'numeric',
  }).format(timeWithTimezone);

  const temp = formatTemp(tempFromData);

  const tempFeels = formatTemp(tempFeelsFromData);

  const weatherTypeStr = upperCaseFirst(weatherTypeStrFromData);

  return (
    <section className={styles.today}>
      <div className={styles.block}>
        <p className={styles.region}>{cityNameFromData || '—'}</p>
        <p className={styles.date}>{date}</p>
        <p className={styles.time}>{time}</p>
      </div>

      <div className={styles.block}>
        <p className={styles.temperature}>{temp || '—'}</p>
      </div>

      <div className={styles.block}>
        <div className={styles.type}>
          <Img src={cloudy} alt="weather-type" classes={['typeImg']} />
          <p className={styles.typeText}>{weatherTypeStr}</p>
        </div>
        <p className={styles.feels}>{`Ощущается как ${tempFeels || '—'}°`}</p>
      </div>
    </section>
  );
};

export default Today;
