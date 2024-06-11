import IMAGE_NAMES from "../constants/IMAGE_NAMES";

export const details = [
  {
    title: "Влажность",
    imgSrc: IMAGE_NAMES.humidity,
    value: 75,
    pbValue: 62.7,
    units: "%",
    min: 0,
    max: 100,
  },
  {
    title: "Давление",
    imgSrc: IMAGE_NAMES.pressure,
    value: 761,
    pbValue: 76.2,
    gradientPb: true,
    description: "Повышенное",
  },
  {
    title: "Видимость",
    imgSrc: IMAGE_NAMES.visibility,
    value: 28,
    pbValue: 24.6,
    units: "км",
    description: "Нормальная",
  },
  {
    title: "Рассвет",
    imgSrc: IMAGE_NAMES.sunrise,
    value: "8:42",
    description: "Прошло: 02:47",
  },
  {
    title: "Закат",
    imgSrc: IMAGE_NAMES.sunset,
    value: "16:37",
    description: "Осталось: 05:08",
  },
  {
    title: "Сила ветра",
    imgSrc: IMAGE_NAMES.wind,
    value: 2,
    units: "м/с",
    description: "Северо-западный",
  },
];

export const forecast = {
  hourly: [
    {
      time: "12:00",
      imgSrc: IMAGE_NAMES.dayBrokenClouds,
      temp: "-7°",
      description: "облачно",
    },
    {
      time: "15:00",
      imgSrc: IMAGE_NAMES.dayBrokenClouds,
      temp: "-5°",
      description: "облачно",
    },
    {
      time: "18:00",
      imgSrc: IMAGE_NAMES.dayBrokenClouds,
      temp: "-7°",
      description: "облачно",
    },
    {
      time: "21:00",
      imgSrc: IMAGE_NAMES.dayBrokenClouds,
      temp: "-9°",
      description: "облачно",
    },
    {
      time: "00:00",
      imgSrc: IMAGE_NAMES.dayBrokenClouds,
      temp: "-11°",
      description: "облачно",
    },
    {
      time: "03:00",
      imgSrc: IMAGE_NAMES.dayBrokenClouds,
      temp: "-13°",
      description: "облачно",
    },
    {
      time: "06:00",
      imgSrc: IMAGE_NAMES.dayBrokenClouds,
      temp: "-15°",
      description: "облачно",
    },
    {
      time: "09:00",
      imgSrc: IMAGE_NAMES.dayBrokenClouds,
      temp: "-17°",
      description: "облачно",
    },
  ],
  week: [
    {
      date: "Вс, 07 янв.",
      imgSrc: IMAGE_NAMES.dayFewClouds,
      temp: "от -17° до -11°",
      description: "переменная облачность",
    },
    {
      date: "Пн, 08 янв.",
      imgSrc: IMAGE_NAMES.dayFewClouds,
      temp: "от -16° до -8°",
      description: "переменная облачность",
    },
    {
      date: "Вт, 09 янв.",
      imgSrc: IMAGE_NAMES.dayBrokenClouds,
      temp: "от -8° до -2°",
      description: "облачно",
    },
    {
      date: "Ср, 10 янв.",
      imgSrc: IMAGE_NAMES.dayBrokenClouds,
      temp: "от -2° до 1°",
      description: "облачно",
    },
    {
      date: "Чт, 11 янв.",
      imgSrc: IMAGE_NAMES.dayBrokenClouds,
      temp: "от -2° до 1°",
      description: "облачно",
    },
  ],
};
