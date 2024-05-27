import styles from "./input.module.css";

const Input = ({ id, value, setValue, placeholder, type = "text", autocomplete = "off" }) => {
  return (
    <input
      value={value}
      onChange={(e)=> {setValue(e.target.value)}}
      id={id}
      placeholder={placeholder}
      type={type}
      autoComplete={autocomplete}
      className={styles.input}
    />
  );
};

export default Input;
