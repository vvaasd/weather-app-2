import CardList from "../card-list";
import CityCard from "../city-card";
import { details } from "../../data";
import styles from "./main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <CityCard />
      <section className={styles.details}>
        <CardList data={details} />
      </section>
    </main>
  );
};

export default Main;
