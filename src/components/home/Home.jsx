import Container from '../container/Container';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import Slider from '../slider/Slider';

import fetchAndSetWeatherData from '../../utils/fetchAndSetWeatherData';
import { API_KEY } from '../../constants/API_KEY';
import { PageContext } from '../../context/context';
import { useEffect, useState } from 'react';

const Home = () => {
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    fetchAndSetWeatherData('Москва', API_KEY, setWeatherData);
  }, []);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  return (
    <Container>
      <PageContext.Provider
        value={{
          setWeatherData,
          timezoneFromData: weatherData?.timezone,
          tempFromData: weatherData?.main?.temp,
          tempFeelsFromData: weatherData?.main?.feels_like,
          weatherTypeStrFromData:
            weatherData.weather && weatherData?.weather[0]?.description,
          cityNameFromData: weatherData?.name,
          humidityFromData: weatherData?.main?.humidity,
          pressureFromData: weatherData?.main?.pressure,
          visibilityFromData: weatherData?.visibility,
          humidityFromData: weatherData?.main?.humidity,
          sunriseFromData: weatherData?.sys?.sunrise,
          sunsetFromData: weatherData?.sys?.sunset,
          windSpeedFromData: weatherData?.wind?.speed,
        }}
      >
        <Header />
        <Main />
        <Slider />
        <Footer />
      </PageContext.Provider>
    </Container>
  );
};

export default Home;
