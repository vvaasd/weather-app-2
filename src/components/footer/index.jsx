import clsx from "../../utils/clsx";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={clsx("descr", styles.descr)}>
        Проект{" "}
        <a
          className={styles.link}
          href="https://vvaasd-weather-app-2.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          WeatherApp 2
        </a>
      </p>
    </footer>
  );
};

export default Footer;
