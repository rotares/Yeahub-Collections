import IconSearch from '@/shared/assets/searchIcon.svg';
import { Input } from '@/shared/ui';
import { memo } from 'react';
import { useSearchFilter } from '../model/useSearchFilter';

interface SearchInputProps {
  placeholder?: string;
}

export const CollectionSearchInput = memo(
  ({ placeholder = 'Введите запрос...' }: SearchInputProps) => {
    const { value, onChange } = useSearchFilter({
      key: 'titleOrDescriptionSearch',
    });

    return <Input icon={IconSearch} placeholder={placeholder} value={value} onChange={onChange} />;
  },
);
