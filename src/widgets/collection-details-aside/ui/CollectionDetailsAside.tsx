import { useGetCollectionByIdQuery } from '@/entities';
import { Badge } from '@/shared/ui/Badge';
import { Chip } from '@/shared/ui/Chip';
import { FilterBar } from '@/shared/ui/FilterBar';
import { InfoBlock } from '@/shared/ui/InfoBlock';
import { memo } from 'react';
import { CollectionDetailsAsideSkeleton } from './CollectionDetailsAsideSkeleton';

export const CollectionDetailsAsideWidget = memo(({ collectionId }: { collectionId: number }) => {
  const { data, isLoading } = useGetCollectionByIdQuery(collectionId);

  const render = () => {
    if (isLoading || !data) {
      return <CollectionDetailsAsideSkeleton />;
    }

    return (
      <>
        <InfoBlock title="Специализация">
          {data.specializations.map(({ id, title }) => (
            <Chip type="static" key={id}>
              {title}
            </Chip>
          ))}
        </InfoBlock>

        {data.company && (
          <InfoBlock title="Компания">
            {
              <Chip type="static" key={data.company.id}>
                {data.company.title}
              </Chip>
            }
          </InfoBlock>
        )}

        <InfoBlock title="Доступ">
          {
            <Chip type="static" key={'AccessType'}>
              {data.isFree ? 'Для всех' : 'Для участников'}
            </Chip>
          }
        </InfoBlock>

        <InfoBlock title="Количество вопросов">
          <Chip type="static" key={'questionCount'}>
            {data.questionsCount}
          </Chip>
        </InfoBlock>

        <InfoBlock title="Ключевые слова">
          {data.keywords.map((keyword) => (
            <Badge type="keyword" text={`#${keyword}`} key={keyword} />
          ))}
        </InfoBlock>

        {data?.createdBy?.username && (
          <InfoBlock type="row" title="Автор:">
            <Badge type="keyword" text={data.createdBy.username} key={data.createdBy.id} />
          </InfoBlock>
        )}
      </>
    );
  };

  return <FilterBar>{render()}</FilterBar>;
});

CollectionDetailsAsideWidget.displayName = 'CollectionAsideContainer';
