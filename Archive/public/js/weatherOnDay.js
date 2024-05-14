const weatherOnDayData = [
  {
    title: "Облачно",
    time: "12:00",
    image: "public/images/clouds.svg",
    degrees: "-7",
  },
  {
    title: "Облачно",
    time: "15:00",
    image: "public/images/clouds.svg",
    degrees: "-5°",
  },
  {
    title: "Облачно",
    time: "18:00",
    image: "public/images/clouds.svg",
    degrees: "-7",
  },
  {
    title: "Облачно",
    time: "21:00",
    image: "public/images/clouds.svg",
    degrees: "-9°",
  },
  {
    title: "Облачно",
    time: "00:00",
    image: "public/images/clouds.svg",
    degrees: "-11",
  },
  {
    title: "Облачно",
    time: "12:00",
    image: "public/images/clouds.svg",
    degrees: "-7",
  },
];

export const weatherOnDay = () => {
  document.getElementById("onDay").innerHTML = weatherOnDayData
    .map((item) => {
      return `
    <div class="slider__tab">
    <time datetime="${item.time}" class="slider__text">${item.time}</time>
    <img class="slider__img" src="${item.image}" alt="${item.title}">
    <p class="slider__text">${item.degrees}°</p>
    </div>
    `;
    })
    .join("");
};

