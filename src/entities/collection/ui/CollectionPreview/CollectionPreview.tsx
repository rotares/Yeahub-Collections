import styles from './CollectionPreview.module.css';

interface Props {
  text: string | number;
  icon?: string;
}

export const CollectionPreview = ({ text, icon }: Props) => {
  return (
    <div className={styles.preview}>
      {icon && <img className={styles.icon} src={icon} alt="" width="20" height="20" />}
      <p className={styles.text}>{text}</p>
    </div>
  );
};
