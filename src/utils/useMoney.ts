export const numberToNTD = (num: number): string => {
  const currency = new Intl.NumberFormat().format(num);
  return `NT$ ${currency}`;
};
