import styles from './Input.module.css';

const Input = ({ placeholder, onInput, onSubmit, value }) => {
  return (
    <form className={styles['form']} action="#">
      <input
        type="search"
        className={styles['input']}
        placeholder={placeholder}
        onInput={(event) => {
          onInput(event);
        }}
      />
      <button type="submit" className={styles['btn']} />
    </form>
  );
};

export default Input;
