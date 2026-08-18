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
    return <div className="text-sm text-gray-400">Загрузка...</div>;
  }
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-sm font-medium text-gray-700">{title}</h4>

      <div className="flex flex-wrap gap-2">
        {options.map(({ title: optionTitle, value }) => {
          const active = isSelected(value);

          return (
            <button
              key={String(value)}
              type="button"
              onClick={() => onToggle(value)}
              className={`px-3 py-1.5 rounded-xl border text-sm font-medium transition-colors ${
                active
                  ? 'border-purple-600 bg-purple-50 text-purple-700'
                  : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {optionTitle}
            </button>
          );
        })}
      </div>
    </div>
  );
};
