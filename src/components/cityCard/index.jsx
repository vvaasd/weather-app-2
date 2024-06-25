import clsx from "../../utils/clsx";
import styles from "./cityCard.module.css";
import useWeather from "../../hooks/useWeather";
import Icon from "../icon";
import { formatTime, formatToDay, getTimeByTimezone } from "../../utils/date";

const CityCard = () => {
  const { weatherInfo, isLoadingWeather, errorWeather, errorCity } =
    useWeather();

  if (errorWeather || errorCity) {
    return <div>Отсутствует соединеие с сервером</div>;
  }

  return (
    <section className={styles.cityCard}>
      {isLoadingWeather ? (
        "Загрузка..."
      ) : weatherInfo ? (
        <>
          <h1 className={clsx("title section-title", styles.city)}>
            {weatherInfo.cityName}
          </h1>
          <span className={styles.date}>{formatToDay()}</span>
          <span className={styles.time}>
            {formatTime(
              getTimeByTimezone(new Date(), weatherInfo.timezone * 1000)
            )}
          </span>
          <span className={styles.tempFact}>
            {Math.round(weatherInfo.main.temp)}°
          </span>
          <span className={styles.condition}>
            <Icon name={weatherInfo.weather[0].icon} width={24} height={24} />
            <span className={styles["condition-text"]}>
              {weatherInfo.weather ? weatherInfo.weather[0].description : ""}
            </span>
          </span>
          <span className={styles.tempFeelsLike}>
            Ощущается как {Math.round(weatherInfo.main.feels_like)}°
          </span>
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default CityCard;
