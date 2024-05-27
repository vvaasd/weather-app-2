import styles from './form.module.css';
import Input from '../input/Input';
import { Icon } from '../../components/icon/Icon';

import fetchAndSetWeatherData from '../../utils/fetchAndSetWeatherData';
import { API_KEY } from '../../constants/API_KEY';
import { cls } from '../../utils/cls';
import { useContext, useEffect, useState } from 'react';
import { PageContext } from '../../context/context';

const Form = ({ action = '#!', id }) => {
  const [value, setValue] = useState('');
  const { setWeatherData } = useContext(PageContext);

  const sumbitHandler = (e) => {
    e.preventDefault();

    fetchAndSetWeatherData(value, API_KEY, setWeatherData);

    setValue('');
  };

  return (
    <form
      action={action}
      className={cls([styles.form, value && styles.hovered])}
      id={id}
      onSubmit={sumbitHandler}
    >
      <Input
        value={value}
        setValue={setValue}
        id="id-header-search-input"
        placeholder="Поиск по городу"
      />
      {value.length === 0 && (
        <button type="submit" className={styles.btn}>
          <Icon icon={'search'} />
        </button>
      )}
      {value.length > 0 && (
        <button type="button" className={styles.btn} onClick={sumbitHandler}>
          <Icon icon={'close'} />
        </button>
      )}
    </form>
  );
};

export default Form;
