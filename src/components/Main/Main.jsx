import styles from './Main.module.css';

import CityCard from './../CityCard/CityCard';
import CardList from './../CardList/CardList';
import SliderSection from './../SliderSection/SliderSection';

const Main = () => {
  return (
    <main>
      <section className={styles['weather-today']}>
        <CityCard />
        <CardList />
      </section>
      <SliderSection />
    </main>
  );
};

export default Main;
