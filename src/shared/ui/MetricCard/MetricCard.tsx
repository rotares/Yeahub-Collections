import styles from './MetricCard.module.css';
type Props = {
  title: string;
  score: number;
};

export const MetricCard = ({ title, score }: Props) => {
  return (
    <div className={styles.metricCard}>
      <span className={styles.title}>{title}:</span>
      <div className={styles.score}>{score}</div>
    </div>
  );
};
