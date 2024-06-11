import IMAGE_NAMES from "../../../constants/IMAGE_NAMES";
import SEARCH_STATUSES from "../../../constants/SEARCH_STATUSES";

import styles from "./dropdown.module.css";
import Icon from "../icon/icon";
import Loader from "../loader/loader";
import { forwardRef } from "react";
import clsx from "../../../utils/clsx";

const Dropdown = forwardRef(
  (
    {
      searchStatus = SEARCH_STATUSES.loading,
      currentCityName,
      history = [],
      clearHistory,
      onSelectCurrentCity,
      onSelectCityFromHistory,
    },
    ref
  ) => {
    let headerText;
    let content;

    switch (searchStatus) {
      case SEARCH_STATUSES.loading:
        headerText = "Ищем...";
        content = (
          <div className={styles.loader}>
            <Loader />
          </div>
        );
        break;

      case SEARCH_STATUSES.success:
        headerText = "Результат поиска";
        content = (
          <button className={styles.historyBtn} onClick={onSelectCurrentCity}>
            <p className={styles.text}>{currentCityName}</p>
          </button>
        );
        break;
      case SEARCH_STATUSES.history:
        headerText = "Недавно смотрели";
        if (history.length === 0) {
          content = (
            <p className={clsx(styles.text, styles.errorText)}>
              История поиска пустая.
            </p>
          );
        } else {
          content = (
            <ul className={styles.historyList}>
              {history
                .map((cityName, index) => (
                  <li className={styles.historyElement} key={index}>
                    <button
                      className={styles.historyBtn}
                      onClick={() => {
                        onSelectCityFromHistory(cityName);
                      }}
                    >
                      <p className={styles.text}>{cityName}</p>
                    </button>
                  </li>
                ))
                .reverse()}
            </ul>
          );
        }
        break;

      case SEARCH_STATUSES.notFound:
        headerText = "Упс! Город не найден";
        content = (
          <p className={clsx(styles.text, styles.errorText)}>
            Попробуйте другое название.
          </p>
        );
        break;

      default:
        break;
    }

    return (
      <div ref={ref} className={styles.dropdown}>
        <div className={styles.headerAndBtnWrapper}>
          <h3 className={styles.header}>{headerText}</h3>
          {searchStatus === SEARCH_STATUSES.history && (
            <button
              onClick={clearHistory}
              disabled={history.length === 0}
              className={styles.clearHistoryBtn}
              type="button"
            >
              <Icon
                name={IMAGE_NAMES.trashBin}
                className={styles.clearHistoryIcon}
              />
            </button>
          )}
        </div>
        {content}
      </div>
    );
  }
);

export default Dropdown;
