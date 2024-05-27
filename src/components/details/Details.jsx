import styles from "./details.module.css";
import CardList from "../cardList/CardList";

const Details = () => {
  return (
    <section>
      <div className={styles.wrap}>
        <CardList />
      </div>
    </section>
  );
};

export default Details;
