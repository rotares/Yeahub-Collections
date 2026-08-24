import { SidebarToggle } from '@/features';
import QuestionImg from '@/shared/assets/questionImg.jpg';
import { HeaderSection } from '@/shared/ui/HeaderSection';
import { useQuestionDetails } from '@/widgets';

export const QuestionDetailsHeader = ({
  page,
  questionId,
  collectionId,
}: {
  page: number;
  questionId: string;
  collectionId: string;
}) => {
  const { question, isLoading } = useQuestionDetails(page, questionId, collectionId);

  if (isLoading || !question) {
    return <div>download</div>;
  }

  return (
    <HeaderSection
      title={question.title}
      description={question.description}
      action={<SidebarToggle type="side" />}
      image={QuestionImg}
    />
  );
};
