import styles from './Logo.module.css';
import LogoSvg from './../../assets/logo.svg';
import LogoMobileSvg from './../../assets/logo-small.svg';

const Logo = () => {
  return (
    <a className={styles['logo']} href="index.html">
      <picture>
        <source
          srcSet={LogoMobileSvg}
          media="(max-width: 886px)"
          alt="Логотип"
        />
        <img src={LogoSvg} className={styles['logo-small']} alt="Логотип" />
      </picture>
    </a>
  );
};

export default Logo;
