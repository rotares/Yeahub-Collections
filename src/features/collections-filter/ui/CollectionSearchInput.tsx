import type { GetPublicCollectionsParams } from '@/shared/api/types';
import { memo } from 'react';
import { collectionsQuerySchema } from '../../../entities';
import { useSearchFilter } from '../model/useSearchFilter';

interface SearchInputProps {
  placeholder?: string;
}

export const CollectionSearchInput = memo(
  ({ placeholder = 'Введите запрос...' }: SearchInputProps) => {
    const { value, onChange, onClear } = useSearchFilter<GetPublicCollectionsParams>({
      key: 'titleOrDescriptionSearch',
      schema: collectionsQuerySchema,
    });

    return (
      <div className="relative w-full">
        {/* Инпут */}
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-9 py-2.5 bg-white border border-gray-200 rounded-2xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
        />

        {/* Кнопка сброса (крестик) */}
        {value && (
          <button
            type="button"
            onClick={onClear}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    );
  },
);
