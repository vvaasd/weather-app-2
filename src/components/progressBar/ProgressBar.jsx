import styles from './progressBar.module.css';

export function ProgressBar({ current, type }) {
  return (
    <>
      <input
        type='range'
        min='0'
        max='100'
        value={current}
        className={
          styles.visualDegreeBar +
          (type === 'dark' ? ` ${styles.visualDegreeBarPressure}` : '')
        }
        disabled
        style={{
          mask: `radial-gradient(
            circle at calc(${current}% + 4px),
            transparent 6px,
            var(--proggress-bar-bg-color) 6px,
            var(--proggress-bar-bg-color) 6px
          )`,
        }}
      />
      <div
        style={{ left: `${current}%` }}
        className={styles.visualDegreeBarEllipse}
      ></div>
    </>
  );
}
