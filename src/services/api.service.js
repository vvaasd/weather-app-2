export class ApiService {
  static async getCityData(value) {
    return fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${value}&format=json&addressdetails=1&limit=1`
    )
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(
            "Отсутствует связь со сторонним сервисом openstreetmap"
          );
        }
        return res.json();
      })
      .then((cityData) => {
        if (cityData.length === 0) {
          return Promise.reject("Упс! Город не найден, попробуйте другой");
        }
        return cityData;
      })
      .catch((e) => {
        return Promise.reject(e);
      });
  }

  static async getWeatherDataByCoordinates(lat, lon) {
    if (!lat || !lon) {
      return Promise.reject("Ошибка получения координат");
    }
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric&lang=ru`
    )
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(
            "Отсутствует связь со сторонним сервисом openweathermap"
          );
        }
        return res.json();
      })
      .catch((e) => {
        return Promise.reject(e);
      });
  }
}
