import { Badge } from '@/shared/ui/Badge';
import { Chip } from '@/shared/ui/Chip';
import { InfoBlock } from '@/shared/ui/InfoBlock';
import { useCollectionDetails } from '../../model';

export const CollectionAsideContainer = ({ collectionId }: { collectionId: string }) => {
  const { collectionData, isLoadingCollection } = useCollectionDetails(collectionId);

  if (isLoadingCollection || !collectionData) {
    return <div>download</div>;
  }

  return (
    <>
      <InfoBlock title="Специализация">
        {collectionData.specializations.map(({ id, title }) => (
          <Chip type="static" key={id}>
            {title}
          </Chip>
        ))}
      </InfoBlock>

      <InfoBlock title="Компания">
        {
          <Chip type="static" key={collectionData.company.id}>
            {collectionData.company.title}
          </Chip>
        }
      </InfoBlock>

      <InfoBlock title="Доступ">
        {
          <Chip type="static" key={'AccessType'}>
            {collectionData.isFree ? 'Для всех' : 'Для участников'}
          </Chip>
        }
      </InfoBlock>

      <InfoBlock title="Количество вопросов">
        {collectionData.keywords.map((keyword) => (
          <Chip type="static" key={keyword}>
            {keyword}
          </Chip>
        ))}
      </InfoBlock>

      <InfoBlock title="Ключевые слова">
        {collectionData.keywords.map((keyword) => (
          <Badge type="keyword" text={`#${keyword}`} key={keyword} />
        ))}
      </InfoBlock>

      <InfoBlock type="row" title="Автор:">
        <Badge
          type="keyword"
          text={collectionData.createdBy.username}
          key={collectionData.createdBy.id}
        />
      </InfoBlock>
    </>
  );
};
