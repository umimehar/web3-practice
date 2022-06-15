//
//
//  GLOBAL COMMON / UTIL functions   //
// --------------------------------- //
//  DON'T ADD Common or UTIL HERE!   //
// --------------------------------- //
// ADD Common / util folder - screen //
// Scoped for the functions folders  //
// --------------------------------- //

// transform any array to a hash map using given key

export const arrayToHashMap = (
  array: any[],
  key: string | number
): Record<string, any> => {
  if (!array || !array.length) return {};
  return array.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {});
};
