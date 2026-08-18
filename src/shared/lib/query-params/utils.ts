import { type ParamType } from './types';

export const parseValue = (value: string | null, type: ParamType, defaultValue: unknown) => {
  if (value === null || value === undefined) {
    return defaultValue;
  }

  switch (type) {
    case 'number': {
      const num = Number(value);
      return isNaN(num) ? defaultValue : num;
    }
    case 'boolean': {
      if (value === 'true') return true;
      if (value === 'false') return false;
      return defaultValue;
    }
    case 'numberArray': {
      if (!value.trim()) return defaultValue ?? [];
      const arr = value
        .split(',')
        .map(Number)
        .filter((v) => !isNaN(v));
      return arr.length > 0 ? arr : (defaultValue ?? []);
    }
    case 'stringArray': {
      if (!value.trim()) return defaultValue ?? [];
      const arr = value.split(',').filter(Boolean);
      return arr.length > 0 ? arr : (defaultValue ?? []);
    }
    case 'string':
    default:
      return value || defaultValue;
  }
};

export const serializeValue = (value: unknown, type: ParamType): string | null => {
  if (
    value === undefined ||
    value === null ||
    value === '' ||
    (Array.isArray(value) && value.length === 0)
  ) {
    return null;
  }

  if (type === 'numberArray' && Array.isArray(value)) {
    return value.join(',');
  }

  if (type === 'stringArray' && Array.isArray(value)) {
    return value.join(',');
  }

  return String(value);
};
