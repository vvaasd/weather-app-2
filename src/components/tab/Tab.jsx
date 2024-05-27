import styles from './tab.module.css';

export function Tab({ text, active, value, cb }) {
  return (
    <div className={styles.selectionBtnWrap}>
      <button
        className={`${styles.selectionBtn} ${
          active ? styles.selectionBtnActive : ''
        }`}
        onClick={() => cb(value)}
      >
        {text}
      </button>
    </div>
  );
}
