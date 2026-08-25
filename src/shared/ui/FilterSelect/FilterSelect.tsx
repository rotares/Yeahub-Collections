import { useState } from 'react';
import { Chip } from '../Chip';
import styles from './FilterSelect.module.css';
import { FilterSelectSkeleton } from './FilterSelectSkeleton/FilterSelectSkeleton';
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
  maxVisible?: number;
}

export const FilterSelect = <T,>({
  title,
  options,
  isSelected,
  onToggle,
  isLoading,
  maxVisible,
}: FilterSelectProps<T>) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = Boolean(maxVisible && options.length > maxVisible);
  const visibleOptions = shouldTruncate && !isExpanded ? options.slice(0, maxVisible) : options;

  if (isLoading) {
    return <FilterSelectSkeleton chipsCount={5} />;
  }

  return (
    <div className={styles.main}>
      <h4 className={styles.title}>{title}</h4>

      <div className={styles.filterWrapper}>
        {visibleOptions.map(({ title: optionTitle, value }) => {
          const active = isSelected(value);

          return (
            <Chip isActive={active} key={String(value)} onClick={() => onToggle(value)}>
              {optionTitle}
            </Chip>
          );
        })}
      </div>

      {shouldTruncate && (
        <button
          type="button"
          className={styles.showMoreBtn}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? 'Скрыть' : 'Показать все'}
        </button>
      )}
    </div>
  );
};
