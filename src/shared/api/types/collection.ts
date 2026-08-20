import { type CreatedBy, type PaginationParams } from './common';
import { type SpecializationDto } from './specialization';

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
  questionsCount: number;
  specializations: SpecializationDto[];
  company: CompanyDto;
}

export interface GetPublicCollectionsParams extends PaginationParams {
  titleOrDescriptionSearch?: string;
  specializations?: number[];
  isFree?: boolean;
}
