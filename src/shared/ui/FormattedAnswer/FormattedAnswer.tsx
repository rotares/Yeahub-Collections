import styles from './FormattedAnswer.module.css';

export const FormattedAnswer = ({ text }: { text: string }) => {
  return <div className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />;
};
