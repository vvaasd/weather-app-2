import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <p className={styles.about}>
          Проект выполнен в рамках стажировки{" "}
          <a
            href="https://preax.ru"
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            PREAX
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
