export type CommonParams = Partial<{
  page: number;
  limit: number;
  titleOrDescriptionSearch: string;
  isFree: boolean;
  specializations: number[];
}>;
