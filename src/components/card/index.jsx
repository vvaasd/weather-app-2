import { useEffect, useState } from "react";
import clsx from "../../utils/clsx";
import styles from "./card.module.css";
import ProgressBar from "../ui/progress-bar";
import Icon from "../ui/icon/icon";

const Card = ({
  title,
  imgName,
  value,
  pbValue,
  units,
  min,
  max,
  gradientPb,
  description,
}) => {
  const [progressValue, setProgressValue] = useState("10%");

  useEffect(() => {
    if (pbValue) {
      setTimeout(() => {
        setProgressValue(pbValue + "%");
      }, 100);
    }
  }, [pbValue]);

  return (
    <li className={styles.item}>
      <article className={clsx("card", styles.card)}>
        <h2 className={clsx("title", styles.title)}>{title}</h2>
        <Icon name={imgName} />
        <span className={styles.value}>
          {value}
          {units ? " " + units : ""}
        </span>
        <div className={styles.bottom}>
          {pbValue && <ProgressBar current={progressValue} type={gradientPb} />}
          <div
            className={clsx(
              styles.info,
              typeof min === "number" &&
                typeof max === "number" &&
                styles.interval
            )}
          >
            {typeof min === "number" && typeof max === "number" ? (
              <>
                <span>0%</span>
                <span>100%</span>
              </>
            ) : (
              description
            )}
          </div>
        </div>
      </article>
    </li>
  );
};

export default Card;
