import { DOTS, usePagination } from './usePagination';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isDisabled?: boolean;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  isDisabled,
}: PaginationProps) => {
  const paginationRange = usePagination({ currentPage, totalPages });

  if (currentPage === 0 || totalPages <= 1) {
    return null;
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 select-none">
      <button
        type="button"
        disabled={currentPage === 1 || isDisabled}
        onClick={handlePrevious}
        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
        aria-label="Предыдущая страница"
      >
        -
      </button>

      {/* Список страниц */}
      <div className="flex items-center gap-1">
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <span
                key={`dots-${index}`}
                className="w-9 h-9 flex items-center justify-center text-gray-500 font-medium"
              >
                &#8230;
              </span>
            );
          }

          const isActive = pageNumber === currentPage;

          return (
            <button
              key={pageNumber}
              type="button"
              disabled={isDisabled}
              onClick={() => onPageChange(Number(pageNumber))}
              className={`w-9 h-9 rounded-lg font-medium text-sm transition-colors flex items-center justify-center ${
                isActive ? 'bg-purple-600 text-white shadow-sm' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      {/* Кнопка "Вперед" */}
      <button
        type="button"
        disabled={currentPage === totalPages || isDisabled}
        onClick={handleNext}
        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
        aria-label="Следующая страница"
      >
        +
      </button>
    </div>
  );
};
