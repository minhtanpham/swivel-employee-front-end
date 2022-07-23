export const isEmpty = <T>(input: T): input is NonNullable<T> => {
  if (input === null || input === undefined) {
    return true;
  }
  if (typeof input === 'string' && input.trim() === '') {
    return true;
  }
  if (Array.isArray(input) && input.length === 0) {
    return true;
  }
  if (typeof input === 'object' && Object.keys(input).length === 0) {
    return true;
  }
  return false;
};
