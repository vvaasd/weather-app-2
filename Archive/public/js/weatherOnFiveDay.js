const weatherOnFiveDayData = [
  {
    title: "Переменная облачность",
    day: "Вс",
    date: "07 янв",
    image: "public/images/partlyСloudy.png",
    degreesFrom: "-17",
    degreesTo: "-11",
  },
  {
    title: "Переменная облачность",
    day: "Пн",
    date: "08 янв",
    image: "public/images/partlyСloudy.png",
    degreesFrom: "-16",
    degreesTo: "-8",
  },
  {
    title: "Облачно",
    day: "Вт",
    date: "09 янв",
    image: "public/images/clouds.svg",
    degreesFrom: "-8",
    degreesTo: "-2",
  },
  {
    title: "Переменная облачность",
    day: "Вс",
    date: "07 янв",
    image: "public/images/partlyСloudy.png",
    degreesFrom: "-17",
    degreesTo: "-11",
  },
  {
    title: "Переменная облачность",
    day: "Вс",
    date: "07 янв",
    image: "public/images/partlyСloudy.png",
    degreesFrom: "-17",
    degreesTo: "-11",
  },
];

export const weatherOnFiveDay = () => {
  document.getElementById("onFiveDay").innerHTML = weatherOnFiveDayData
    .map((item) => {
      return `
    <div class="slider__tab">
      <time datetime="${item.date}" class="slider__text">${item.day}, ${item.date}.</time>
      <img class="slider__img" src="${item.image}" alt="${item.title}">
      <p class="slider__text">от ${item.degreesFrom}° до ${item.degreesTo}°</p>
    </div>
    `;
    })
    .join("");
};
