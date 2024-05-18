import { useState } from 'react';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.css';
import { Input } from '../Input/Input';
import Icon from '../Icon/Icon';
import IMAGE_NAMES from '../../constants/IMAGE_NAMES';

export function Header() {
  const [value, setValue] = useState('');
  const [hasHover, setHasHover] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const inputHandler = (e) => {
    const value = e.target.value;
    console.log(value);
    setValue(value);
    setHasHover(true);
  };

  const clearHandler = () => {
    setValue('');
    setHasHover(false);
  };
  return (
    <header className={styles.header}>
      <Logo className={styles['logo']} />

      <div className={styles['header__search']}>
        <form
          onSubmit={submitHandler}
          action="#!"
          className={styles['search-form']}
          style={{ backgroundColor: hasHover && 'var(--light-color-accent)' }}
          id="id-header-search-form"
        >
          <Input
            value={value}
            onInput={inputHandler}
            setFormHasHover={setHasHover}
            placeholder="Поиск по городу"
          />
          {value.length === 0 && (
            <button
              onClick={submitHandler}
              className={styles['search-form__btn']}
              type="submit"
              id="id-header-search-btn"
            >
              <Icon
                name={IMAGE_NAMES.search}
                id="id-header-search-icon"
                className={styles['search-form__btn-icon']}
              />
            </button>
          )}
          {value.length > 0 && (
            <button
              className={styles['search-form__btn']}
              type="reset"
              id="id-header-search-btn-close"
              onClick={clearHandler}
            >
              <Icon
                name={IMAGE_NAMES.close}
                id="id-header-search-icon"
                className={styles['search-form__btn-icon']}
              />
            </button>
          )}
        </form>
      </div>
    </header>
  );
}
