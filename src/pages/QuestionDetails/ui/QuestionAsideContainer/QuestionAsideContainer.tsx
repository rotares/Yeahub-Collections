import { Badge } from '@/shared/ui/Badge';
import { Chip } from '@/shared/ui/Chip';
import { InfoBlock } from '@/shared/ui/InfoBlock';
import { MetricCard } from '@/shared/ui/MetricCard';
import { useQuestionDetails } from '@/widgets';
import { memo } from 'react';

export const QuestionAsideContainer = memo(
  ({
    collectionId,
    page,
    questionId,
  }: {
    page: number;
    questionId: string;
    collectionId: string;
  }) => {
    const { isLoading, question } = useQuestionDetails(page, questionId, collectionId);

    if (isLoading || !question) {
      return <div>download</div>;
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
            <Badge type="keyword" text={question.createdBy.username} key={question.createdBy.id} />
          </InfoBlock>
        )}
      </>
    );
  },
);

QuestionAsideContainer.displayName = 'QuestionAsideContainer';
