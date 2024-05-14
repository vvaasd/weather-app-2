import { useContext } from 'react';
import styles from './CardList.module.css';

import Card from './../Card/Card';

import { MainContext } from './../../Context/context';

const CardList = () => {
  const { cardsDataFromAPI } = useContext(MainContext);

  const cards = cardsDataFromAPI.map((cardData, index) => (
    <Card
      key={index}
      title={cardData.title}
      image={cardData.image}
      value={cardData.value}
      measurement={cardData.measurement}
      hasProgressBar={cardData.hasProgressBar}
      meaning={cardData.meaning}
      meaningEnd={cardData.meaningEnd}
      hasGradient={cardData.title === 'Давление'}
    />
  ));

  return (
    <div className={styles['wrapper']}>
      <ul className={styles['card-list']}>{cards}</ul>
    </div>
  );
};

export default CardList;
