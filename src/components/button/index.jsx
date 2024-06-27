import styles from "./button.module.css";
import Icon from "../icon";

const Button = ({ onClick, isDisabled, iconName }) => {
  return (
    <button
      className={styles.navButton}
      disabled={isDisabled}
      onClick={onClick}
    >
      <Icon name={iconName} width="24" height="24" />
    </button>
  );
};

export default Button;
