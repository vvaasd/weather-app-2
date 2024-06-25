import humidity from "../assets/img/humidity.svg";
import barometr from "../assets/img/barometr.svg";
import visibility from "../assets/img/visibility.svg";
import sunrise from "../assets/img/sunrise.svg";
import sunset from "../assets/img/sunset.svg";
import direction from "../assets/img/direction.svg";

export const appKey = "fas4W9WtNylwzdhR";

export const initialCards = [
  {
    title: "Влажность",
    img: humidity,
    value: null,
    pbValue: null,
    units: "%",
    min: 0,
    max: 100,
  },
  {
    title: "Давление",
    img: barometr,
    value: null,
    pbValue: null,
    gradientPb: null,
    description: null,
  },
  {
    title: "Видимость",
    img: visibility,
    value: null,
    pbValue: null,
    units: "км",
    description: null,
  },
  {
    title: "Рассвет",
    img: sunrise,
    value: null,
    description: null,
  },
  {
    title: "Закат",
    img: sunset,
    value: null,
    description: null,
  },
  {
    title: "Сила ветра",
    img: direction,
    value: null,
    units: "м/с",
    direction: null,
    description: null,
  },
];

export const directions = [
  "Северный",
  "Северо-восточный",
  "Восточный",
  "Юго-восточный",
  "Южный",
  "Юго-западный",
  "Западный",
  "Северо-западный",
];

export const initialForecast = {
  hourly: [
    {
      time: "12:00",
      img: "03d",
      temp: "21°",
      description: "переменная облачность",
    },
    {
      time: "15:00",
      img: "04d",
      temp: "21°",
      description: "облачно с прояснениями",
    },
    {
      time: "18:00",
      img: "04d",
      temp: "19°",
      description: "облачно с прояснениями",
    },
    {
      time: "21:00",
      img: "03n",
      temp: "16°",
      description: "переменная облачность",
    },
    {
      time: "00:00",
      img: "02n",
      temp: "14°",
      description: "небольшая облачность",
    },
    {
      time: "03:00",
      img: "02d",
      temp: "15°",
      description: "небольшая облачность",
    },
    {
      time: "06:00",
      img: "02d",
      temp: "19°",
      description: "небольшая облачность",
    },
    { time: "09:00", img: "01d", temp: "21°", description: "ясно" },
  ],
  week: [
    {
      date: "пт, 21 июн.",
      img: "04d",
      temp: "от 15° до 22°",
      description: "облачно с прояснениями",
    },
    {
      date: "сб, 22 июн.",
      img: "01d",
      temp: "от 13° до 23°",
      description: "ясно",
    },
    {
      date: "вс, 23 июн.",
      img: "04d",
      temp: "от 15° до 22°",
      description: "облачно с прояснениями",
    },
    {
      date: "пн, 24 июн.",
      img: "04d",
      temp: "от 14° до 22°",
      description: "облачно с прояснениями",
    },
    {
      date: "вт, 25 июн.",
      img: "10d",
      temp: "от 15° до 21°",
      description: "небольшой дождь",
    },
  ],
};
