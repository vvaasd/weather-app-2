import styles from "./header.module.css";
import  Form  from "../../ui/form/Form";
import  Logo  from "../logo/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Form />
    </header>
  );
};

export default Header;
