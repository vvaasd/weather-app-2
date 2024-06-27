import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import clsx from "./utils/clsx";
import { appKey } from "./providers/constants";
import useWeather from "./hooks/useWeather";
import { useEffect, useState } from "react";

function App() {
  const { cityInfo, fetchCity, fetchWeather, fetchForecast, isPanelOpen } =
    useWeather();
  const [firstLoad, setFirstLoad] = useState(true);
  const queriesHistory = JSON.parse(localStorage.getItem(appKey)) || [];

  useEffect(() => {
    fetchCity(queriesHistory[0]?.name || "Москва", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cityInfo && firstLoad) {
      fetchWeather(cityInfo.name, cityInfo.lat, cityInfo.lon);
      fetchForecast(cityInfo.lat, cityInfo.lon);
      setFirstLoad(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityInfo, firstLoad]);

  return (
    <div className="app">
      <div className={clsx("content", isPanelOpen && "panelOpened")}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
