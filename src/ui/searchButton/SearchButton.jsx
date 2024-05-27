import {cls }from "../../utils/cls";
import styles from "./searchButton.module.css";

const SearchButton = ({onClick, type, id, children, classes = [] }) => {
  return (
    <button onClick={onClick} className={styles.btn + cls(classes)} type={type} id={id}>
      {children}
    </button>
  );
};

export default SearchButton;
