export const isArrayShallowEqual = <T>(
  prev: T[],
  next: T[],
  compareFn?: (a: T, b: T) => boolean,
): boolean => {
  if (prev === next) return true;
  if (prev.length !== next.length) return false;

  return prev.every((item, index) => {
    const nextItem = next[index];
    if (compareFn) {
      return compareFn(item, nextItem);
    }
    return item === nextItem;
  });
};
