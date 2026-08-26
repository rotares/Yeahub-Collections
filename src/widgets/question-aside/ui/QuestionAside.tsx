import { useQuestionDetails } from '@/entities';
import { Badge, Chip, FilterBar, InfoBlock, MetricCard } from '@/shared/ui';
import { memo } from 'react';
import { QustionAsideSkeleton } from './QustionAsideSkeleton';

export const QuestionAsideWidget = memo(
  ({
    collectionId,
    page,
    questionId,
  }: {
    page: number;
    questionId: number;
    collectionId: number;
  }) => {
    const { isLoading, question } = useQuestionDetails(page, questionId, collectionId);

    const render = () => {
      if (isLoading || !question) {
        return <QustionAsideSkeleton />;
      }

      return (
        <>
          <InfoBlock title="Уровень">
            <MetricCard title="Сложность" score={question.complexity} />
            <MetricCard title="Рейтинг" score={question.rate} />
          </InfoBlock>

          {question.questionSkills.length !== 0 && (
            <InfoBlock title="Навыки">
              {question.questionSkills.map((skill) => (
                <Chip type="static" key={skill.id}>
                  {skill.title}
                </Chip>
              ))}
            </InfoBlock>
          )}

          {question.keywords.length !== 0 && (
            <InfoBlock title="Ключевые слова">
              {question.keywords.map((keyword) => (
                <Badge type="keyword" text={`#${keyword}`} key={keyword} />
              ))}
            </InfoBlock>
          )}

          {question?.createdBy?.username && (
            <InfoBlock type="row" title="Автор:">
              <Badge
                type="keyword"
                text={question.createdBy.username}
                key={question.createdBy.id}
              />
            </InfoBlock>
          )}
        </>
      );
    };

    return <FilterBar>{render()}</FilterBar>;
  },
);

QuestionAsideWidget.displayName = 'QuestionAside';
