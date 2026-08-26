import { useQueryParams } from '@/shared/lib';
import { Button } from '@/shared/ui/';

export const FiltersResetButton = () => {
  const { resetQueryParams } = useQueryParams();

  return (
    <Button type="transparent" onClick={resetQueryParams}>
      Сбросить фильтры
    </Button>
  );
};
