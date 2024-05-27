import styles from "./main.module.css";
import CityCard from "../cityCard/CityCard";
import Details from "../details/Details";

const Main = () => {
  return (
    <main className={styles.main}>
      <CityCard />
      <Details/>
    </main>
  );
};

export default Main;
