import Card from "../card";
import clsx from "../../utils/clsx";
import styles from "./cardList.module.css";
import useWeather from "../../hooks/useWeather";

const CardList = () => {

  const {weatherCards, isLoadingWeather, errorWeather, errorCity} = useWeather();

  if(errorWeather || errorCity) {
    return <div>Отсутствует соединеие с сервером</div>
  }

  return (
    <ul className={clsx("list", styles.list)}>
      {
        isLoadingWeather
        ? "Загрузка..."
        : weatherCards.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            img={item.img}
            value={item.value}
            pbValue={item.pbValue}
            units={item.units}
            direction={item.direction}
            min={item.min}
            max={item.max}
            gradientPb={item.gradientPb}
            description={item.description}
          />
        ))
      }
    </ul>
  );
};

export default CardList;
