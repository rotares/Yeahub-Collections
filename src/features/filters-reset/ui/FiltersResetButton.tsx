import { useQueryParams } from '@/shared/lib/hooks';
import { Button } from '../../../shared/ui/Button';

export const FiltersResetButton = () => {
  const { resetQueryParams } = useQueryParams();

  return (
    <Button type="transparent" onClick={resetQueryParams}>
      Сбросить фильтры
    </Button>
  );
};
