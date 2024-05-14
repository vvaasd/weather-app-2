import { useState } from 'react';
import styles from './SliderSection.module.css';
import SLIDER_TYPE from './../../constants/SLIDER_TYPE';

import Slider from './../Slider/Slider';

const SliderSection = () => {
  const [currentSliderType, setCurrentSliderType] = useState(
    SLIDER_TYPE.forOneDay
  );

  return (
    <section className={styles['slider']}>
      <div className={styles['tabs-wrapper']}>
        <h2 className={styles['tabs-header']}>Прогноз:</h2>
        <div className={styles['tabs']}>
          <button
            className={styles['tab']}
            onClick={() => setCurrentSliderType(SLIDER_TYPE.forOneDay)}
            disabled={currentSliderType === SLIDER_TYPE.forOneDay}
          >
            на 24 часа
          </button>
          <button
            className={styles['tab']}
            onClick={() => setCurrentSliderType(SLIDER_TYPE.forFiveDays)}
            disabled={currentSliderType === SLIDER_TYPE.forFiveDays}
          >
            на 5 дней
          </button>
        </div>
      </div>
      <Slider currentSlider={currentSliderType} />
    </section>
  );
};

export default SliderSection;
