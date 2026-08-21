import { Chip } from '../Chip';
import styles from './FilterSelect.module.css';
export interface FilterOption<T> {
  title: string;
  value: T;
}

interface FilterSelectProps<T> {
  title: string;
  options: FilterOption<T>[];
  isSelected: (value: T) => boolean;
  onToggle: (value: T) => void;
  isLoading?: boolean;
}

export const FilterSelect = <T,>({
  title,
  options,
  isSelected,
  onToggle,
  isLoading,
}: FilterSelectProps<T>) => {
  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  return (
    <div className={styles.main}>
      <h4 className={styles.title}>{title}</h4>

      <div className={styles.filterWrapper}>
        {options.map(({ title: optionTitle, value }) => {
          const active = isSelected(value);

          return (
            <Chip isActive={active} key={String(value)} onClick={() => onToggle(value)}>
              {optionTitle}
            </Chip>
          );
        })}
      </div>
    </div>
  );
};
