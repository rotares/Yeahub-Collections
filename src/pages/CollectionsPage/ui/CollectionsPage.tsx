import { CollectionList } from '@/entities';
import { AccessFilter, CollectionSearchInput, SpecializationFilter } from '@/features';
import { useCollectionData } from '../api';
import styles from './CollectionsPage.module.css';

export const CollectionsPage = () => {
  const { data, isLoading } = useCollectionData();

  console.log(data);

  if (!data || isLoading) {
    return <div>Загрузка</div>;
  }

  return (
    <section className={styles.main}>
      <CollectionList items={data} />
      <div>
        <CollectionSearchInput />
        <AccessFilter />
        <SpecializationFilter />
      </div>
    </section>
  );
};
