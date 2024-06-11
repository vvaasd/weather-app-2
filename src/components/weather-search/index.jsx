import IMAGE_NAMES from "../../constants/IMAGE_NAMES";
import SEARCH_STATUSES from "../../constants/SEARCH_STATUSES";

import getFromLocalStorage from "../../utils/getFromLocalStorage";
import setToLocalStorage from "../../utils/setToLocalStorage";

import Input from "../ui/input";
import Icon from "../ui/icon/icon";
import Dropdown from "../ui/dropdown";
import styles from "./weather-search.module.css";

import { PageContext } from "../../context/context";
import { ApiService } from "../../services/api.service";
import { useContext, useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const WeatherSearch = () => {
  const { setWeatherData, blurContent, unblurContent } =
    useContext(PageContext);
  const [searchStatus, setSearchStatus] = useState(SEARCH_STATUSES.history);
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState(
    getFromLocalStorage("historyCities") || []
  );
  const currentCity = useRef({
    name: getFromLocalStorage("historyCities")?.slice(-1) || "",
    lat: null,
    lon: null,
  });
  const weatherSearchRef = useRef(null);
  const dropdownRef = useRef(null);

  const pushToHistory = (element) => {
    const cities = history;

    if (cities.includes(element)) {
      cities.splice(cities.indexOf(element), 1);
    } else if (cities.length === 5) {
      cities.shift();
    }
    cities.push(element);

    setToLocalStorage("historyCities", cities);
    setHistory(cities);
  };

  const clearHistory = () => {
    setToLocalStorage("historyCities", []);
    setHistory([]);
  };

  const dropdownOpenHandler = () => {
    setSearchStatus(SEARCH_STATUSES.history);

    blurContent();
    document.body.style.overflow = "hidden";
    dropdownRef.current.classList.add(styles.dropdownOpened);
  };

  const dropdownCloseHandler = () => {
    setSearchStatus(SEARCH_STATUSES.history);

    unblurContent();
    dropdownRef.current.classList.remove(styles.dropdownOpened);
    document.body.style.overflow = "auto";
  };

  async function fetchAndSetCity(
    city,
    targetSearchStatus = SEARCH_STATUSES.success
  ) {
    setSearchStatus(SEARCH_STATUSES.loading);
    return ApiService.getCityData(city)
      .then((cityData) => {
        currentCity.current.lat = cityData[0].lat;
        currentCity.current.lon = cityData[0].lon;
        currentCity.current.name = cityData[0].name;
        pushToHistory(currentCity.current.name);

        setSearchStatus(targetSearchStatus);
      })
      .catch((e) => {
        console.log(e);
        setSearchStatus(SEARCH_STATUSES.notFound);
      });
  }

  async function fetchAndSetWeatherData() {
    return ApiService.getWeatherDataByCoordinates(
      currentCity.current.lat,
      currentCity.current.lon
    )
      .then((data) => {
        setWeatherData(data);
        console.log(data);

        dropdownCloseHandler();
        setInputValue("");
      })
      .catch((e) => {
        return Promise.reject(e);
      });
  }

  const selectCurrentCityHandler = () => {
    fetchAndSetWeatherData().catch((e) => {
      console.log(e);
      setSearchStatus(SEARCH_STATUSES.notFound);
    });
  };

  const selectCityFromHistoryHandler = (cityName) => {
    fetchAndSetCity(cityName, SEARCH_STATUSES.loading)
      .then(() => {
        fetchAndSetWeatherData().catch((e) => {
          console.log(e);
          setSearchStatus(SEARCH_STATUSES.notFound);
        });
      })
      .catch((e) => {
        console.log(e);
        setSearchStatus(SEARCH_STATUSES.notFound);
      });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (searchStatus === SEARCH_STATUSES.loading) {
      return;
    }

    if (inputValue) {
      fetchAndSetCity(inputValue).catch((e) => {
        console.log(e);
        setSearchStatus(SEARCH_STATUSES.notFound);
      });
    }
  };

  const inputHandler = (e) => {
    e.preventDefault(e.target.value);

    if (
      e.target.value.match(/^[?!,.а-яА-ЯёЁ0-9\s-]+$/) ||
      e.target.value === ""
    ) {
      setInputValue(e.target.value);
    }
  };

  const inputClearHandler = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  useClickOutside(weatherSearchRef, dropdownCloseHandler);

  return (
    <div className={styles.wrapper} ref={weatherSearchRef}>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <Input
          className={styles.search}
          value={inputValue}
          onInput={inputHandler}
          onFocus={dropdownOpenHandler}
          type="search"
          placeholder="Поиск по городу"
        />
        {inputValue.length === 0 && (
          <button className={styles.searchBtn}>
            <Icon name={IMAGE_NAMES.search} className={styles.searchSvg}></Icon>
          </button>
        )}
        {inputValue.length > 0 && (
          <button
            onClick={inputClearHandler}
            className={styles.closeBtn}
            type="reset"
          >
            <Icon name={IMAGE_NAMES.close} className={styles.closeSvg}></Icon>
          </button>
        )}
      </form>
      {
        <Dropdown
          ref={dropdownRef}
          searchStatus={searchStatus}
          currentCityName={currentCity.current.name}
          history={history}
          clearHistory={clearHistory}
          onSelectCurrentCity={selectCurrentCityHandler}
          onSelectCityFromHistory={selectCityFromHistoryHandler}
        />
      }
    </div>
  );
};

export default WeatherSearch;
