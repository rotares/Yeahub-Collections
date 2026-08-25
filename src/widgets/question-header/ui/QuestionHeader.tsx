import { useQuestionDetails } from '@/entities';
import { SidebarToggle } from '@/features';
import QuestionImg from '@/shared/assets/questionImg.jpg';
import { HeaderSection } from '@/shared/ui/HeaderSection';

export const QuestionHeaderWidget = ({
  page,
  questionId,
  collectionId,
}: {
  page: number;
  questionId: number;
  collectionId: number;
}) => {
  const { question, isLoading } = useQuestionDetails(page, questionId, collectionId);

  return (
    <HeaderSection
      title={question?.title}
      description={question?.description}
      action={<SidebarToggle type="side" />}
      image={QuestionImg}
      isLoading={isLoading}
    />
  );
};
