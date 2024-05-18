import styles from './Input.module.css';

export function Input({ value, onInput, setFormHasHover, placeholder }) {
  return (
    <input
      value={value}
      onInput={onInput}
      placeholder={placeholder}
      type="text"
      autoComplete="off"
      className={styles.input}
      onClick={() => setFormHasHover(true)}
      onBlur={() => setFormHasHover(false)}
    />
  );
}
