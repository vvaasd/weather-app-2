function formatTimeDifference(difference) {
  let milliseconds = difference % 1000;
  difference = (difference - milliseconds) / 1000;
  let seconds = Math.floor(difference % 60);
  difference = (difference - seconds) / 60;
  let minutes = Math.floor(difference % 60);
  difference = (difference - minutes) / 60;
  let hours = Math.floor(difference % 24);

  let formattedHours = String(hours).padStart(2, '0');
  let formattedMinutes = String(minutes).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}

export default formatTimeDifference;
