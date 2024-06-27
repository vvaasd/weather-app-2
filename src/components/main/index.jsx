import CardList from "../cardList";
import CityCard from "../cityCard";
import styles from "./main.module.css";
import Slider from "../slider";

const Main = () => {
  return (
    <main className={styles.main}>
      <CityCard />
      <CardList />
      <Slider />
    </main>
  );
};

export default Main;
