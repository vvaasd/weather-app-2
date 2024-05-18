import SLIDER_TYPES from '../../constants/SLIDER_TYPES';

import { CityCard } from '../CityCard/CityCard';
import { CardList } from '../CardList/CardList';
import { Slider } from '../Slider/Slider';
import { TabBar } from '../TabBar/TabBar';
import styles from './Main.module.css';

import { useState } from 'react';

export function Main() {
  const [activeSlider, setActiveSlider] = useState(SLIDER_TYPES.forOneDay);

  return (
    <main>
      <div className={styles.weather}>
        <CityCard />
        <CardList />
      </div>
      <section className={styles['forecast-slider']}>
        <TabBar setActiveSlider={setActiveSlider} active={activeSlider} />
        <Slider activeSlider={activeSlider} />
      </section>
    </main>
  );
}
