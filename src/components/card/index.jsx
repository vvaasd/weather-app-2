import { useEffect, useState } from "react";
import clsx from "../../utils/clsx";
import styles from "./card.module.css";
import ProgressBar from "../progressBar";

const Card = ({
  title,
  img,
  value,
  pbValue,
  units,
  min,
  max,
  direction,
  gradientPb,
  description,
}) => {
  const [progressValue, setProgressValue] = useState("10%");

  useEffect(() => {
    if (pbValue !== undefined) {
      let validatedPbValue = pbValue;
      if (validatedPbValue > 3 && validatedPbValue <= 100) {
        validatedPbValue = validatedPbValue * 0.96;
      } else if (validatedPbValue <= 3) {
        validatedPbValue = 3;
      } else {
        validatedPbValue = 96;
      }

      setTimeout(() => {
        setProgressValue(validatedPbValue + "%");
      }, 100);
    }
  }, [pbValue]);

  return (
    <li className={styles.item}>
      <article className={clsx("card", styles.card)}>
        <h2 className={clsx("title", styles.title)}>{title}</h2>
        <img
          style={{ transform: `rotate(${direction}deg)` }}
          className={styles.img}
          src={img}
          alt="иконка"
        />
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
