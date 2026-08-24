import { type CollectionDto } from '@/shared/api/types/';
import CollectionImg from '@/shared/assets/Collection.jpg';
import Icon from '@/shared/assets/questionIcon.svg';
import { isArrayShallowEqual } from '@/shared/lib/utils';
import { Badge } from '@/shared/ui/Badge';
import { Card } from '@/shared/ui/Card';
import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CollectionPreview } from '../CollectionPreview';
import styles from './CollectionItem.module.css';

type CollectionItemProps = Pick<
  CollectionDto,
  'id' | 'title' | 'isFree' | 'specializations' | 'questionsCount' | 'keywords'
>;

export const CollectionItem = memo(
  ({ id, title, keywords, isFree, questionsCount, specializations }: CollectionItemProps) => {
    const location = useLocation();

    return (
      <Link
        className={styles.linkWrapper}
        to={`/collections/${id}`}
        state={{
          from: location.pathname,
        }}
      >
        <Card key={id} className={styles.card}>
          <div className={styles.imgWrapper}>
            <img src={CollectionImg} alt={title} className={styles.img} />
          </div>
          <div className={styles.content}>
            {keywords.length > 0 && (
              <div className={styles.tags}>
                {keywords.slice(0, 7).map((tag) => (
                  <Badge key={`${tag}${id}`} text={tag} />
                ))}
              </div>
            )}

            <div className={styles.infoWrapper}>
              <h3 className={styles.title}>{title}</h3>

              <div className={styles.meta}>
                <CollectionPreview text={isFree ? 'Для всех' : 'Для участников'} />
                <CollectionPreview icon={Icon} text={`${questionsCount} вопросов`} />
              </div>

              {specializations.length > 0 && (
                <div className={styles.specInfo}>
                  {specializations.map((spec) => (
                    <span key={`${spec.title}${id}`} className={styles.spec}>
                      {spec.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Card>
      </Link>
    );
  },
  (prevProps, nextProps) => {
    const isPrimitiveEqual =
      prevProps.id === nextProps.id &&
      prevProps.isFree === nextProps.isFree &&
      prevProps.questionsCount === nextProps.questionsCount &&
      prevProps.title === nextProps.title;

    if (!isPrimitiveEqual) return false;

    const isKeywordsEqual = isArrayShallowEqual(prevProps.keywords, nextProps.keywords);

    if (!isKeywordsEqual) return false;

    const isSpecializationsEqual = isArrayShallowEqual(
      prevProps.specializations,
      nextProps.specializations,
      (prevSpec, nextSpec) => prevSpec.id === nextSpec.id && prevSpec.title === nextSpec.title,
    );

    return isSpecializationsEqual;
  },
);

CollectionItem.displayName = 'CollectionItem';
