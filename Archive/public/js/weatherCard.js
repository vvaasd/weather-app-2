import { weatherData } from './weatherData.js';

function getPercentageGradient(value, maxValue) {
  return (value * 100) / maxValue;
}

export const weatherCard = () => {
  document.querySelector('.weather__items').innerHTML = weatherData
    .map((item) => {
      if (item.progressBar === true) {
        return `<article class="weather__item">
        <h2 class="weather__title">${item.title}</h2>
        <img class="weather__img" src="${item.image}" alt="${item.title}">
        <p class="weather__parameter">${item.value} ${item.measurement}</p>
        <input class="weather__range" type="range" name="${
          item.title
        }" value='${item.value}' min='1' max='${
          item.maxValue
        }' step='1' style="mask:radial-gradient(circle at ${getPercentageGradient(
          item.value,
          item.maxValue
        )}%, black 3px, transparent 6px, black 10px)" />
        <div class="weather__box">      
            <p class="weather__indicator">${item.meaning}</p>
            <p class="weather__indicator">${item.meaningEnd}</p>
         </div>
      </article>
`;
      } else {
        return `<article class="weather__item">
        <h2 class="weather__title">${item.title}</h2>
        <img class="weather__img" src="${item.image}" alt="${item.title}">
        <p class="weather__parameter">${item.value} ${item.measurement}</p>
        <div class="weather__box"> 
        <p class="weather__indicator">${item.meaning}</p>
        </div>
       </article>
       `;
      }
    })
    .join('');
  document.querySelector(
    '.weather__item:nth-child(2) .weather__range'
  ).style.background =
    'radial-gradient(50% 2344966.00% at 50% 50%, rgba(84, 84, 84, 0.4) 0%, rgba(138, 138, 138, 0.4) 45.12%, rgb(218, 218, 218) 100%, rgba(218, 218, 218, 0.4) 100%)';
};
