import { useEffect, useState } from 'react';
import styles from './App.module.css';
import fetchData from './utils/fetchData';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import { MainContext } from './Context/context';

const App = () => {
  const [cardsDataFromAPI, setCardsDataFromAPI] = useState([]);
  const [oneDayDataFromAPI, setOneDayDataFromAPI] = useState([]);
  const [fiveDaysDataFromAPI, setFiveDaysDataFromAPI] = useState([]);

  useEffect(() => {
    fetchData('/cards-data.json', setCardsDataFromAPI);
    fetchData('/one-day-data.json', setOneDayDataFromAPI);
    fetchData('/five-day-data.json', setFiveDaysDataFromAPI);
  }, []);

  return (
    <div className={styles['container']}>
      <Header />
      <MainContext.Provider
        value={{ cardsDataFromAPI, oneDayDataFromAPI, fiveDaysDataFromAPI }}
      >
        <Main />
      </MainContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
