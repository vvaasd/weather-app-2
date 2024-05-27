async function fetchAndSetWeatherData(query, key, setFunc) {
  // get coordiates
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1`
    );
    if (!response.ok) {
      throw new Error(
        'Отсутствует связь со сторонним сервисом openstreetmap.org'
      );
    }

    const dataForCoordinates = await response.json();

    // fetch weather data by coordinates
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${dataForCoordinates[0]?.lat}&lon=${dataForCoordinates[0]?.lon}&appid=${key}&units=metric&lang=ru`
      );
      if (!response.ok) {
        throw new Error(
          'Отсутствует связь со сторонним сервисом openweathermap.org'
        );
      }

      const weatherData = await response.json();
      if (weatherData.name !== query) {
        throw new Error('Упс! Город не найден, попробуйте другой');
      }
      setFunc(weatherData);
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
}

export default fetchAndSetWeatherData;
