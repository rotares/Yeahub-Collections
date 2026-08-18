export type ParamType = 'number' | 'boolean' | 'string' | 'numberArray' | 'stringArray';

export interface ParamSchema<T> {
  type: ParamType;
  defaultValue?: T;
}

export type QuerySchema<T> = {
  [K in keyof T]: ParamSchema<T[K]>;
};
