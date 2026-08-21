import { useRef } from 'react';
import styles from './Input.module.css';

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement, Element>) => void;
  value: string;
  icon?: string;
  placeholder?: string;
};

export const Input = ({ onChange, value, icon, ...rest }: InputProps) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    ref.current?.focus();
  };

  return (
    <div onClick={handleClick} className={styles.inputWrapper}>
      {icon && <img className={styles.img} src={icon} />}
      <input ref={ref} className={styles.input} onChange={onChange} value={value} {...rest} />
    </div>
  );
};
