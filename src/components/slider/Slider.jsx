import { useState } from 'react';
import styles from './slider.module.css';
import dataHours from '../../data/weather-data-24h.json';
import dataDays from '../../data/weather-data-5d.json';
import hoursIcon from '../../img/weather-type/day-cloudy.svg';
import daysIcon from '../../img/weather-type/day-few-clouds.svg';
import { TabBar } from '../tabBar/TabBar';

const Slider = () => {
  const HOURS = 'hours';
  const DAYS = 'days';
  const [activeTab, setActiveTab] = useState(HOURS);

  return (
    <section className={styles.forecast}>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className={styles.sliders}>
        <button
          className={
            styles.moveBtn +
            ' ' +
            styles.moveBtnLeft +
            ' ' +
            styles.moveBtnInactive
          }
        ></button>
        <button className={styles.moveBtn + ' ' + styles.moveBtnRight}></button>
        <div className={styles.slider}>
          <ul
            className={
              styles.sliderCards + (activeTab === HOURS ? '' : ' none')
            }
          >
            {dataHours.map((item) => (
              <li className={styles.slideCard} key={item.time}>
                <p className={styles.sliderCardTime}>{item.time}</p>
                <img
                  className={styles.slideCardWeatherType}
                  src={hoursIcon}
                  alt='weather-type'
                />
                <span className={styles.sliderCardTemperature}>
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
          <ul
            className={styles.sliderCards + (activeTab === DAYS ? '' : 'none')}
          >
            {dataDays.map((item) => (
              <li className={styles.slideCard} key={item.time}>
                <p className={styles.sliderCardTime}>{item.time}</p>
                <img
                  className={styles.slideCardWeatherType}
                  src={daysIcon}
                  alt='weather-type'
                />
                <p className={styles.sliderCardTemperatureRange}>
                  <span>от {item.value.minValue}&deg;</span>
                  <span>до {item.value.maxValue}&deg;</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Slider;
