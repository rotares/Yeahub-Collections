import DOMPurify from 'dompurify';
import styles from './FormattedAnswer.module.css';

export const FormattedAnswer = ({ text }: { text: string }) => {
  const cleanHtml = DOMPurify.sanitize(text);
  return <div className={styles.text} dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
};
