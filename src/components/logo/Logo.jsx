import styles from "./logo.module.css";
import logo from "../../img/logo.svg";
import logoMini from "../../img/logo-mini.svg";

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <img src={logo} alt="logo" className={styles.logo} />
      <img src={logoMini} alt="logo" className={styles.logoMini} />
    </div>
  );
};

export default Logo;
