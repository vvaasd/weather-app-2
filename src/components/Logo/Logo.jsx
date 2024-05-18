import { cn } from '../../utils/cn.js';
import IMAGE_NAMES from './../../constants/IMAGE_NAMES.js';

import Icon from '../Icon/Icon';
import styles from './Logo.module.css';

export function Logo({ className }) {
  return (
    <a href="/" className={styles['header__logo-wrap']}>
      <Icon name={IMAGE_NAMES.logo} className={styles.logo} />
      <Icon
        name={IMAGE_NAMES.logoSmall}
        className={cn(styles.logoSmall, className)}
      />
    </a>
  );
}
