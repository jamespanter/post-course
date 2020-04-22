// 14: How do you swap two numbers without using a third variable?
export const swapWithoutThirdVariable = (varArray) => {
  let a: number = varArray[0];
  let b: number = varArray[1];

  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  return [a, b];
};
