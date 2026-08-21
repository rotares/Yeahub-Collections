export interface FilterOptions<T> {
  key: keyof T;
  isMultiple?: boolean;
}
