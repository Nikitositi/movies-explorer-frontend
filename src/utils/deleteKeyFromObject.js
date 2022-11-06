export const deleteKeyFromObject = (object, key) => {
  const result = Object.assign({}, object);
  delete result[key];

  return result;
};
