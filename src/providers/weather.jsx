import { createContext, useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import WeatherService from "../api/WeatherService";
import { directions, initialCards, initialForecast, appKey } from "./constants";
import { correctTime, getDiffTime, getTimeByTimezone } from "../utils/date";
import { DateFormatter } from "../utils/dateFormatter";

export const WeatherContext = createContext({
  cityInfo: undefined,
  weatherInfo: undefined,
  forecast: undefined,
  reset: () => {},
  lastQueries: [],
  clearHistory: () => {},
  fetchCity: () => {},
  fetchForecast: () => {},
  isLoading: false,
  isPanelOpen: false,
  onPanelOpen: () => {},
  onPanelClose: () => {},
});

export const WeatherProvider = ({ children }) => {
  const [lastQueries, setLastQueries] = useState([]);
  const [cityInfo, setCityInfo] = useState(undefined);
  const [weatherInfo, setWeatherInfo] = useState(undefined);
  const [weatherCards, setWeatherCards] = useState(initialCards);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [forecast, setForecast] = useState(initialForecast);
  const [getCity, isLoadingCity, errorCity] = useFetching(
    async (query = "", saveHistory = true) => {
      const responseCity = await WeatherService.getCityByQuery(query);

      if (responseCity.length) {
        const newCityInfo = {
          name:
            responseCity[0].address.city ||
            responseCity[0].address.town ||
            responseCity[0].address.state ||
            responseCity[0].address.province ||
            responseCity[0].display_name,
          lat: responseCity[0].lat,
          lon: responseCity[0].lon,
        };

        setCityInfo(newCityInfo);
        if (saveHistory) {
          updateHistory(newCityInfo);
        }
      } else {
        setCityInfo(null);
      }
    }
  );

  const [getWeather, isLoadingWeather, errorWeather] = useFetching(
    async (name, lat, lon) => {
      if (!lat || !lon) {
        return null;
      }

      const responseWeather = await WeatherService.getWeather(lat, lon);
      responseWeather.cityName = name;
      setWeatherInfo(responseWeather);

      const newWeatherCards = [...weatherCards];

      newWeatherCards[0].value = responseWeather.main.humidity;
      newWeatherCards[0].pbValue = responseWeather.main.humidity;

      responseWeather.main.pressure = Math.trunc(
        responseWeather.main.pressure * 0.75006157584566
      );

      if (responseWeather.main.pressure > 800) {
        responseWeather.main.pressure = 800;
      }

      if (responseWeather.main.pressure < 700) {
        responseWeather.main.pressure = 700;
      }

      newWeatherCards[1].gradientPb = true;
      if (responseWeather.main.pressure > 760) {
        newWeatherCards[1].description = "Повышенное";
      } else if (
        responseWeather.main.pressure <= 760 &&
        responseWeather.main.pressure >= 740
      ) {
        newWeatherCards[1].description = "Нормальное";
      } else {
        newWeatherCards[1].description = "Низкое";
      }

      const ratioPressure = 800 - responseWeather.main.pressure;

      newWeatherCards[1].value = responseWeather.main.pressure;
      newWeatherCards[1].pbValue = 100 - ratioPressure;

      newWeatherCards[2].value = Math.trunc(responseWeather.visibility / 1000);
      newWeatherCards[2].pbValue =
        ((100 / 10) * responseWeather.visibility) / 1000;

      if (responseWeather.visibility > 5000) {
        newWeatherCards[2].description = "Нормальная";
      }

      let sunrise = getTimeByTimezone(
        new Date(responseWeather.sys.sunrise * 1000),
        responseWeather.timezone * 1000
      );
      newWeatherCards[3].value =
        correctTime(sunrise.getHours()) +
        ":" +
        correctTime(sunrise.getMinutes());

      const responseSunrise = getDiffTime(
        getTimeByTimezone(
          new Date(),
          responseWeather.timezone * 1000
        ).getTime(),
        sunrise.getTime()
      );

      let messSunrise = responseSunrise.started ? "Прошло" : "Осталось";

      newWeatherCards[3].description = `${messSunrise}: ${responseSunrise.value}`;

      let sunset = getTimeByTimezone(
        new Date(responseWeather.sys.sunset * 1000),
        responseWeather.timezone * 1000
      );
      newWeatherCards[4].value =
        correctTime(sunset.getHours()) + ":" + correctTime(sunset.getMinutes());

      const responseSunset = getDiffTime(
        getTimeByTimezone(
          new Date(),
          responseWeather.timezone * 1000
        ).getTime(),
        sunset.getTime()
      );
      let messSunset = responseSunset.started ? "Прошло" : "Осталось";
      newWeatherCards[4].description = `${messSunset}: ${responseSunset.value}`;

      newWeatherCards[5].value = Math.round(responseWeather.wind.speed);

      let windDeg = responseWeather.wind.deg;

      windDeg =
        windDeg < 0
          ? (windDeg = 360 - (Math.abs(windDeg) % 360))
          : windDeg % 360;

      newWeatherCards[5].direction = windDeg + 180 + 45;
      newWeatherCards[5].description = directions[Math.round(windDeg / 45)];
      setWeatherCards(newWeatherCards);
    }
  );

  const [getForecast, isLoadingForecast, errorForecast] = useFetching(
    async (lat, lon) => {
      if (!lat || !lon) {
        return null;
      }
      const responseWeather = await WeatherService.getForecast(lat, lon);

      const newForecast = {
        hourly: [],
        week: [],
      };

      const sourceWeek = [];
      let daysWeek = [];

      for (const item of responseWeather?.list.slice(0, 8)) {
        const newItem = {
          time: DateFormatter.getTime(item.dt_txt),
          img: item?.weather[0]?.icon,
          temp: Math.round(item?.main?.temp) + "°",
          description: item?.weather[0]?.description,
        };
        newForecast.hourly.push(newItem);
      }

      for (const item of responseWeather?.list) {
        const newItem = {
          date: DateFormatter.formatDate(item.dt_txt),
          img: item?.weather[0]?.icon,
          temp: `от ${Math.floor(item?.main.temp_min)}° до ${Math.ceil(
            item?.main.temp_max
          )}°`,
          temp_min: item?.main.temp_min,
          temp_max: item?.main.temp_max,
          description: item?.weather[0]?.description,
          main: item?.main,
        };

        sourceWeek.push(newItem);
      }

      daysWeek = Array.from(new Set(sourceWeek.map((el) => el.date))).slice(
        0,
        5
      );

      for (const date of daysWeek) {
        const dataForCurrentDay = sourceWeek.filter((el) => el.date === date);
        const index = Math.floor(dataForCurrentDay.length / 2);

        const temp_min = Math.floor(
          Math.min(...dataForCurrentDay.map((el) => el.temp_min))
        );
        const temp_max = Math.ceil(
          Math.max(...dataForCurrentDay.map((el) => el.temp_max))
        );
        const img = dataForCurrentDay.map((el) => el.img)[index];
        const description = dataForCurrentDay.map((el) => el.description)[
          index
        ];

        const newDay = {
          date: date,
          img: img,
          temp: `от ${temp_min}° до ${temp_max}°`,
          description: description,
        };

        newForecast.week.push(newDay);
      }

      setForecast(newForecast);
    }
  );

  useEffect(() => {
    const lsQueries = localStorage.getItem(appKey);
    localStorage.getItem(appKey);
    if (lsQueries) {
      setLastQueries(JSON.parse(lsQueries));
    }
  }, []);

  useEffect(() => {
    document.querySelector(".app").style.overflow = isPanelOpen ? "hidden" : "";
  }, [isPanelOpen]);

  const reset = () => {
    setCityInfo(undefined);
  };

  const onPanelOpen = () => {
    setIsPanelOpen(true);
  };

  const onPanelClose = () => {
    setIsPanelOpen(false);
    reset();
  };

  const fetchCity = (query = "", saveHistory = true) => {
    getCity(query, saveHistory);
  };

  const fetchWeather = (name, lat, lon) => {
    getWeather(name, lat, lon);
  };

  const fetchForecast = (lat, lon) => {
    getForecast(lat, lon);
  };

  const updateHistory = (newCityInfo) => {
    const updatedHistory = [
      newCityInfo,
      ...lastQueries
        .filter((item) => item.name !== newCityInfo.name)
        .slice(0, 4),
    ];
    localStorage.setItem(appKey, JSON.stringify(updatedHistory));
    setLastQueries(updatedHistory);
  };

  const clearHistory = () => {
    localStorage.removeItem(appKey);
    setLastQueries([]);
  };
  return (
    <WeatherContext.Provider
      value={{
        cityInfo,
        weatherInfo,
        weatherCards,
        fetchCity,
        fetchWeather,
        isLoadingWeather,
        isLoadingCity,
        errorCity,
        errorWeather,
        forecast,
        fetchForecast,
        isLoadingForecast,
        errorForecast,
        reset,
        lastQueries,
        clearHistory,
        isPanelOpen,
        onPanelOpen,
        onPanelClose,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
