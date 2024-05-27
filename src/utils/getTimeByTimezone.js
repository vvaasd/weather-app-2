function getTimeByTimezone(timezoneInSeconds = 10800, targetDate = new Date()) {
  const utcTime = targetDate.getTime() + targetDate.getTimezoneOffset() * 60000;

  return new Date(utcTime + timezoneInSeconds * 1000);
}

export default getTimeByTimezone;
