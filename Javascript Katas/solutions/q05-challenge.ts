// How do you find the largest and smallest number in an unsorted integer array?

export const findLargestAndSmallest = (
  numberArray: number[]
): { smallest: number; largest: number } => {
  let smallest: number;
  let largest: number;

  numberArray.forEach((number: number) => {
    if (number < smallest || smallest === undefined) {
      smallest = number;
    }
  });

  numberArray.forEach((number: number) => {
    if (number > largest || largest === undefined) {
      largest = number;
    }
  });
  return { smallest, largest };
};
