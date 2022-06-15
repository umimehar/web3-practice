// Turns number like 34837 to 34,837
export function formatCurrency(amount: number): string {
  amount = normalizeAmount(amount);

  return amount
    ?.toFixed(2)
    ?.replace(/\d(?=(\d{3})+\.)/g, "$&,")
    .replace(".00", "");
}

// Removes trailing decimals e.g. 34.333333333333 will be changed to 34.33
// 34.89999999999 will be changed to 34.89
export function normalizeAmount(amount: number): number {
  const formattedNum: number =
    Number(parseFloat(`${amount * 100}`).toPrecision(12)) / 100 || 0;
  // Remove any trailing decimals after `.\d{2}`
  return Number(`${formattedNum}`.replace(/(\.\d{2})\d+/, "$1"));
}

export const roundNumberTo2Decimal = (num: number = 0) => {
  return Math.trunc(num * 100) / 100;
};
