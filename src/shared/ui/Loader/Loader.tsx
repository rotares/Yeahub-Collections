import styles from './Loader.module.css';
import { Card } from '../Card';
export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <div className={styles.loaderSpinner} />
        <span className={styles.loaderText}>Загрузка...</span>
      </Card>
    </div>
  );
};
