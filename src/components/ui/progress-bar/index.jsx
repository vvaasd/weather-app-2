import clsx from "../../../utils/clsx";
import styles from "./progressBar.module.css";

const ProgressBar = ({ current, type }) => {
  return (
    <div
      className={clsx(styles.progress, type && styles.gradient)}
      style={{ "--progress-value": current }}
    >
      <div></div>
    </div>
  );
};

export default ProgressBar;
