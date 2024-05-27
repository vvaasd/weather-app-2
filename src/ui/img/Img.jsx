import styles from "./img.module.css";
import { moduleCls } from "../../utils/cls";

const Img = ({ src, alt, id, classes = [] }) => {
  return (
    <img src={src} alt={alt} id={id} className={moduleCls(classes, styles)} />
  );
};

export default Img;
