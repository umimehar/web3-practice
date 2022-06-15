/**
 * @name validateNumber
 * @private
 * @description return if arg is a valid number
 * @example validateNumber('test') // false
 * @example validateNumber(12) // true
 * @param num
 */

export const validateNumber = (num: number) =>
  !!(num || num === 0) && typeof num === "number" && !Number.isNaN(Number(num));

/**
 * @name validateString
 * @private
 * @description return if arg is a valid string
 * @example validateString('') // false
 * @example validateString('test') // true
 * @param str
 */
export const validateString = (str = "") => !!(typeof str === "string" && str);

/**
 * @name isRequired
 * @private
 * @description return message error on arg required
 * @example (param = isRequired('param')) => {}
 * @returns 'param is required'
 * @param param
 */
export const isRequired = (param = "param") => {
  throw new Error(`${param} is required`);
};

/**
 * @name invalidType
 * @private
 * @description return message error on arg required
 * @param {string} param arg
 * @param {string} type type of arguments
 * @example validType('test', 'string')
 * @returns 'param must by a valid string'
 */
export const invalidType = (param = "param", type = "type") => {
  throw new Error(`${param} must be a valid ${type}`);
};

/**
 * @name minutesToMilli
 * @param {number} [minutes = 5]
 * @private
 * @description convert minutes to miliseconds
 * @example minutesToMiliseconds(10) // 600000
 * @return number of miliseconds
 */
export const minutesToMilli = (minutes = 5) => {
  const parseMinutes = !validateNumber(minutes) || minutes < 0 ? 5 : minutes;
  return parseMinutes * 60000;
};

/**
 * @name setItem
 * @private
 * @param {string} name name key for localstorage
 * @param {*} value - data to save in localstorage
 * @param {number} [expiry = 5] - time of expiration in minutes
 * @description function for save data in localstorage
 * @example setItem() //    setItem('data', [{ country: 2 }], 5);
 */

const setItem = (
  name = isRequired("name for localStorage"),
  value = isRequired("value for localStorage"),
  expiry = 5
) => {
  if (!validateString(name)) invalidType("name", "string");
  const validExpiry = !validateNumber(expiry) ? 60000 : minutesToMilli(expiry);
  const item = {
    value,
    expiry: new Date().getTime() + validExpiry,
  };
  localStorage.setItem(name, JSON.stringify(item));
};

/**
 * @name getItem
 * @private
 * @param {string} name name key for localstorage
 * @description function for get data in localstorage
 * @example setItem() //    getItem('data') // [{ visa: 2 }]
 * @returns data from localstorage
 */

const getItem = (name = isRequired("name localstorage")) => {
  if (!validateString(name)) invalidType("name", "string");
  const itemStr = localStorage.getItem(name);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  if (item.expiry < new Date().getTime()) {
    localStorage.removeItem(name);
    return null;
  }
  return item.value;
};

interface ILocalCache {
  getItem: (key: string) => any;
  setItem: (key: string, data: any, expire: number) => any;
}

export const localCache: ILocalCache = { setItem, getItem };
