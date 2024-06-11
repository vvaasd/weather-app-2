import { useState } from "react";
import styles from "./slider.module.css";
import { forecast } from "../../../data";
import TabBar from "../tab-bar";
import Icon from "../icon/icon";

const dataHours = forecast.hourly;
const dataDays = forecast.week;

const Slider = () => {
  const [showHours, setShowHours] = useState(true);

  return (
    <section className={styles.forecast}>
      <div className={styles.selection}>
        <h3 className={styles.selectionTitle}>Прогноз:</h3>
        <TabBar active={showHours} handleClick={setShowHours} />
      </div>

      <div className={styles.sliders}>
        <button
          className={
            styles.moveBtn +
            " " +
            styles.moveBtnLeft +
            " " +
            styles.moveBtnInactive
          }
        ></button>
        <button className={styles.moveBtn + " " + styles.moveBtnRight}></button>
        <div className={styles.slider}>
          <ul className={styles.sliderCards + (!showHours ? " none" : "")}>
            {dataHours.map((item, i) => (
              <li className={styles.slideCard} key={i}>
                <p className={styles.sliderCardTime}>{item.time}</p>
                <Icon
                  className={styles.slideCardWeatherType}
                  name={item.imgSrc}
                />
                <span className={styles.sliderCardTemperature}>
                  {item.temp}
                </span>
              </li>
            ))}
          </ul>
          <ul className={styles.sliderCards + (showHours ? " none" : "")}>
            {dataDays.map((item, i) => (
              <li className={styles.slideCard} key={i}>
                <p className={styles.sliderCardTime}>{item.date}</p>
                <Icon
                  className={styles.slideCardWeatherType}
                  name={item.imgSrc}
                />
                <p className={styles.sliderCardTemperatureRange}>
                  <span>от {item.temp}</span>
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
