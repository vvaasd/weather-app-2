export default class WeatherService {
  static async getCityByQuery(query='') {
    const response = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${query}&format=json&addressdetails=1&limit=1`);
    return await response.json();
  }

  static async getWeather(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=ru`);
    return await response.json();
  }

  static async getForecast(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric&lang=ru`);
    return await response.json();
  }
}
