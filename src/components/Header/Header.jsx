import Logo from './../Logo/Logo';
import Input from './../Input/Input';
import styles from './Header.module.css';

import { useState } from 'react';

const Header = () => {
  const [inputValue, setInputValue] = useState('');

  function inputHandler(event) {
    setInputValue(event.target.value);
    console.log(event.target.value);
  }

  return (
    <header className={styles['header']}>
      <Logo />
      <Input
        placeholder={'Поиск по городу'}
        onInput={inputHandler}
        value={inputValue}
      />
    </header>
  );
};

export default Header;
