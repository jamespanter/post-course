// How do you find the duplicate number on a given integer array?

export const findDuplicate = (numberArray: number[]) => {
  numberArray.sort((a: number, b: number) => {
    return a - b;
  });

  let duplicateNumber: number;

  for (let index = 0; index < numberArray.length; index++) {
    if (numberArray[index] === numberArray[index - 1]) {
      duplicateNumber = numberArray[index];
      break;
    }
  }
  return duplicateNumber;
};
