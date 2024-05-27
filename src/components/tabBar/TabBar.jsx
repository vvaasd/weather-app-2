import { Tab } from '../tab/Tab';
import styles from './tabBar.module.css';

export function TabBar({ activeTab, setActiveTab }) {
  return (
    <div className={styles.selection}>
      <h3 className={styles.selectionTitle}>Прогноз:</h3>
      <Tab
        active={activeTab === 'hours'}
        value={'hours'}
        cb={setActiveTab}
        text={'на 24 часа'}
      />
      <Tab
        active={activeTab === 'days'}
        value={'days'}
        cb={setActiveTab}
        text={'на 5 дней'}
      />
    </div>
  );
}
