import styles from "./tab.module.css";

const Tab = ({ active, handleClick, text }) => {
  return (
    <div className={styles.selectionBtnWrap}>
      <button
        className={`${styles.selectionBtn} ${
          active ? styles.selectionBtnActive : ""
        }`}
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Tab;
