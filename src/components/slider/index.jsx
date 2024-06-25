import { useState, useRef, createRef, useEffect } from "react";
import TabBar from "../tabBar/index.jsx";
import Icon from "../icon";
import Button from "../button/index.jsx";
import styles from "./slider.module.css";
import clsx from "../../utils/clsx.js";
import useWeather from "../../hooks/useWeather.js";

const Slider = () => {
  const { forecast, errorWeather, errorCity, errorForecast } = useWeather();
  const [activeWeather, setActiveWeather] = useState("hourly");
  const sliderContentRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const cardsRefs = useRef(forecast[activeWeather].map(() => createRef()));
  const [sliderPosition, setSliderPosition] = useState({
    index: 0,
    leftOffset: 0,
  });
  const lastCardIndex =
    cardsRefs.current.filter((item) => item.current !== null).length - 1;

  useEffect(() => {
    cardsWrapperRef.current.style.left = `${sliderPosition.leftOffset}px`;
  }, [sliderPosition.leftOffset, sliderPosition.index]);

  if (errorWeather || errorCity || errorForecast) {
    return <div>Отсутствует соединеие с сервером</div>;
  }

  const handleWeatherTypeChange = (weatherType) => {
    setActiveWeather(weatherType);
    setSliderPosition({
      index: 0,
      leftOffset: 0,
    });
    changeSliderContentGradient("end");
  };

  let cards = forecast[activeWeather].map((cardData, i) => (
    <li className={styles.sliderItem} key={i} ref={cardsRefs.current[i]}>
      <article className={`${styles.card} ${styles.sliderCard}`}>
        <h3 className={`${styles.title} ${styles.cardTitle}`}>
          {cardData.date || cardData.time}
        </h3>
        <Icon name={cardData.img} className={styles.cardImg} />
        <p className={styles.cardTemp}>{cardData.temp}</p>
      </article>
    </li>
  ));

  const changeSliderContentGradient = (type = "startEnd") => {
    let mask = "";
    if (type === "start") {
      mask = `linear-gradient(-90deg, #000 93%, transparent 100%)`;
    } else if (type === "end") {
      mask = `linear-gradient(90deg, #000 93%, transparent 100%)`;
    } else if (type === "startEnd") {
      mask = `linear-gradient(
        90deg,
        transparent 0%,
        black 7%,
        black 93%,
        transparent 100%
      )`;
    }
    sliderContentRef.current.style.mask = mask;
    sliderContentRef.current.style.webkitMask = mask;
  };

  const handleMoveSlider = (moveType = "right") => {
    const offsetChange =
      cardsRefs.current[sliderPosition.index]?.current?.offsetWidth +
        parseInt(window.getComputedStyle(cardsWrapperRef.current).gap) || 0; // current card width + wrapper gap

    if (moveType === "right") {
      const finalLeftOffset =
        sliderPosition.leftOffset -
        sliderContentRef.current.offsetWidth -
        offsetChange;
      if (Math.abs(finalLeftOffset) < cardsWrapperRef.current.offsetWidth) {
        setSliderPosition((prevState) => {
          return {
            index: prevState.index + 1,
            leftOffset: prevState.leftOffset - offsetChange,
          };
        });
        changeSliderContentGradient("startEnd");
      } else {
        setSliderPosition({
          index: lastCardIndex,
          leftOffset:
            -cardsWrapperRef.current.offsetWidth +
            sliderContentRef.current.offsetWidth,
        });
        changeSliderContentGradient("start");
      }
    } else if (moveType === "left") {
      const finalLeftOffset = sliderPosition.leftOffset + offsetChange;
      // console.log(finalLeftOffset, offsetChange);
      if (finalLeftOffset <= -10) {
        setSliderPosition((prevState) => {
          return {
            index: prevState.index - 1,
            leftOffset: prevState.leftOffset + offsetChange,
          };
        });
        changeSliderContentGradient("startEnd");
      } else {
        setSliderPosition({
          index: 0,
          leftOffset: 0,
        });
        changeSliderContentGradient("end");
      }
    }
  };

  return (
    <section className={styles.forecast}>
      <header className={styles.header}>
        <h2 className={clsx("title section-title", styles.title)}>Прогноз:</h2>
        <TabBar
          activeWeather={activeWeather}
          onWeatherChange={handleWeatherTypeChange}
        />
      </header>
      <div className={styles.slider}>
        <Button
          iconName={"chevron-left"}
          onClick={() => {
            handleMoveSlider("left");
          }}
          isDisabled={sliderPosition.index === 0}
        />
        <div className={styles.content} ref={sliderContentRef}>
          <ul className={styles.sliderWrapper} ref={cardsWrapperRef}>
            {cards}
          </ul>
        </div>
        <Button
          iconName={"chevron-right"}
          onClick={() => {
            handleMoveSlider("right");
          }}
          isDisabled={sliderPosition.index === lastCardIndex}
        />
      </div>
    </section>
  );
};

export default Slider;
