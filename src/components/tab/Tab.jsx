import styles from './Tab.module.css';
import Icon from '../icon/Icon';

function Tab({ sliderData }) {
  return (
    <div className={styles.sliderContent}>
      <button>
        <Icon path="/images/icons/chevron.svg" />
      </button>

      <ul className={styles.cards}>
        {sliderData.map((cardData, i) => (
          <li key={i} className={styles.dayCard}>
            <div className={styles.cardContent}>
              <span className={styles.time}>{cardData.time}</span>
              <Icon
                path={`/images/icons/weatherType/${cardData.imgName}.svg`}
                size={32}
              />
              <span className={styles.temp}>{cardData.tempStr}</span>
            </div>
          </li>
        ))}
      </ul>

      <button>
        <Icon path="/images/icons/chevron.svg" />
      </button>
    </div>
  );
}

export default Tab;
