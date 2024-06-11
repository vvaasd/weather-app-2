import Card from "../card";
import clsx from "../../utils/clsx";
import styles from "./card-list.module.css";

const CardList = ({ data }) => {
  return (
    <ul className={clsx("list", styles.list)}>
      {data.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          imgName={item.imgSrc}
          value={item.value}
          pbValue={item.pbValue}
          units={item.units}
          min={item.min}
          max={item.max}
          gradientPb={item.gradientPb}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default CardList;
