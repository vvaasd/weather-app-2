import styles from "./header.module.css";
import Logo from "../logo";
import WeatherSearch from "../weather-search";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Logo />
        <WeatherSearch />
      </header>
    </div>
  );
};

export default Header;
