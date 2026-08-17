import type { CreatedBy, PaginationParams } from './common';
import type { SkillDto } from './skill';

export interface QuestionDto {
  id: number;
  title: string;
  description: string;
  shortAnswer: string;
  longAnswer: string;
  rate: number;
  complexity: number;
  createdBy: CreatedBy;
  keywords: string[];
  questionSkills: SkillDto[];
}

export interface GetPublicQuestionsParams extends PaginationParams {
  collection?: number;
  titleOrDescriptionSearch: string;
}
