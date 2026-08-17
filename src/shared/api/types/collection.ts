import { type SpecializationDto } from './specialization';
import { type CreatedBy, type PaginationParams } from './common';

export interface CompanyDto {
  id: string;
  title: string;
  legalName: string;
  description: string;
  imageSrc: string | null;
  createdBy: CreatedBy;
}

export interface CollectionDto {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  isFree: boolean;
  keywords: string[];
  questionCount: number;
  specializations: SpecializationDto[];
  company: CompanyDto;
}

export interface GetPublicCollectionsParams extends PaginationParams {
  titleOrDescriptionSearch?: string;
  specializations?: number[];
  isFree?: boolean;
}
