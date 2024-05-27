import Card from '../card/Card';
import styles from './cardList.module.css';

import formatTimeDifference from '../../utils/formatTimeDifference';
import getTimeByTimezone from '../../utils/getTimeByTimezone';
import { useContext } from 'react';
import { PageContext } from '../../context/context';

const CardList = () => {
  const {
    humidityFromData,
    pressureFromData,
    visibilityFromData,
    sunriseFromData,
    sunsetFromData,
    windSpeedFromData,
    timezoneFromData,
  } = useContext(PageContext);

  const nowDate = getTimeByTimezone(timezoneFromData, new Date());

  const sunriseDate = getTimeByTimezone(
    timezoneFromData,
    new Date(sunriseFromData * 1000)
  );
  const sunsetDate = getTimeByTimezone(
    timezoneFromData,
    new Date(sunsetFromData * 1000)
  );

  let sunriseTimeStr = '—';
  let afterSunrise = '—';

  let sunsetTimeStr = '—';
  let beforeSunset = '—';

  if (sunriseFromData) {
    sunriseTimeStr = Intl.DateTimeFormat('ru', {
      hour: 'numeric',
      minute: 'numeric',
    }).format(sunriseDate);

    afterSunrise = formatTimeDifference(nowDate - sunriseDate);
  }

  if (sunsetFromData) {
    sunsetTimeStr = Intl.DateTimeFormat('ru', {
      hour: 'numeric',
      minute: 'numeric',
    }).format(sunsetDate);

    beforeSunset = formatTimeDifference(sunsetDate - nowDate);
  }

  return (
    <ul className={styles.cards} id="id-weather-details-cards">
      <Card
        key={0}
        title={'Влажность'}
        icon={'humidity'}
        value={humidityFromData}
        measure={'%'}
        progress={true}
        addictional={{
          minValue: '0%',
          maxValue: '100%',
        }}
      />
      <Card
        key={1}
        title={'Давление'}
        icon={'pressure'}
        value={pressureFromData}
        progress={true}
        extraStyles={true}
        addictional={'Повышенное'}
      />
      <Card
        key={2}
        title={'Видимость'}
        icon={'visibility'}
        value={visibilityFromData / 1000}
        measure={'км'}
        progress={true}
        addictional={'Нормальная'}
      />
      <Card
        key={3}
        title={'Рассвет'}
        icon={'sunrise'}
        value={sunriseTimeStr}
        progress={false}
        addictional={`Прошло: ${afterSunrise}`}
      />
      <Card
        key={4}
        title={'Закат'}
        icon={'sunset'}
        value={sunsetTimeStr}
        progress={false}
        addictional={`Осталось: ${beforeSunset}`}
      />
      <Card
        key={5}
        title={'Сила ветра'}
        icon={'wind'}
        measure={'м/с'}
        value={windSpeedFromData}
        progress={false}
        imageRotateDeg={0}
        addictional={'Северо-западный'}
      />
    </ul>
  );
};

export default CardList;
