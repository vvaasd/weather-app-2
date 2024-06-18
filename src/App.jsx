import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { LS_KEY } from "./constants/LS_KEY";
import { WeatherDataContext } from "./context/weatherDataContext";
import { WeatherSearchProvider } from "./providers/WeatherSearchProvider";
import { useEffect, useState } from "react";
import { Api } from "./api";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [currentCityName, setCurrentCityName] = useState(
    JSON.parse(localStorage.getItem(LS_KEY))?.length
      ? JSON.parse(localStorage.getItem(LS_KEY)).slice(0, 1)
      : "Москва"
  );

  const setData = (weatherData, cityName) => {
    setWeatherData(weatherData);
    setCurrentCityName(cityName);
  };
  useEffect(() => {
    Api.getCityWeatherData(currentCityName)
      .then((res) => {
        setWeatherData(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <div className="content">
        <WeatherSearchProvider setData={setData}>
          <Header />
        </WeatherSearchProvider>
        <WeatherDataContext.Provider
          value={{
            timezoneInMiliecondsFromData: weatherData?.timezone * 1000 || null,
            tempFromData: weatherData?.main?.temp || null,
            tempFeelsFromData: weatherData?.main?.feels_like || null,
            weatherTypeStrFromData:
              (weatherData?.weather && weatherData?.weather[0]?.description) ||
              null,
            weatherTypeIconFromData:
              (weatherData?.weather && weatherData?.weather[0]?.icon) || null,
            cityNameFromData: currentCityName || null,
            humidityFromData: weatherData?.main?.humidity || null,
            pressureFromData: weatherData?.main?.pressure || null,
            visibilityFromData: weatherData?.visibility || null,
            sunriseInMiliecondsFromData:
              weatherData?.sys?.sunrise * 1000 || null,
            sunsetInMiliecondsFromData: weatherData?.sys?.sunset * 1000 || null,
            windSpeedFromData: weatherData?.wind?.speed || null,
            windDegFromData: weatherData?.wind?.deg || null,
          }}
        >
          <Main />
        </WeatherDataContext.Provider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
