export const isValidIdCheck = (value: string | undefined) => {
  const id = value ? Number(value) : NaN;
  const isValid = !Number.isNaN(id);

  return {
    isValid,
    id,
  };
};
