export const correctTime = (value) => {
  let result = value;

  if (value < 10) {
    result = `0${value}`;
  }

  return result;
};

export const getDiffTime = (
  timeStart = new Date().getTime(),
  timeEnd = new Date().getTime()
) => {
  const hourDiff = timeEnd - timeStart;
  const minDiff = hourDiff / 60 / 1000; //in minutes
  const hDiff = hourDiff / 3600 / 1000; //in hours

  const hours = Math.trunc(hDiff);
  const minutes = Math.trunc(minDiff - 60 * hours);

  return {
    started: hDiff < 0,
    value: `${correctTime(Math.abs(hours))}:${correctTime(Math.abs(minutes))}`,
  };
};

const weeks = [
  "Воскресение",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const formatToDay = () => {
  const date = new Date();
  return `${weeks[date.getDay()]}, ${date.getDate()} ${
    months[date.getMonth()]
  }`;
};

export const formatTime = (date = new Date()) => {
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${correctTime(hour)}:${correctTime(minutes)}`;
};

export const getTimeByTimezone = (
  targetDate = new Date(),
  timezoneInMilliseconds = 10800000
) => {
  const utcTime = targetDate.getTime() + targetDate.getTimezoneOffset() * 60000;

  return new Date(utcTime + timezoneInMilliseconds);
};
