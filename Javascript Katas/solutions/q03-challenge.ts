// How do you find duplicate numbers in an array if it contains multiple duplicates?

export const findMultipleDuplicates = (numberArray: number[]) => {
  numberArray.sort((a: number, b: number) => {
    return a - b;
  });

  let duplicateNumberArray: number[] = [];

  for (let index = 0; index < numberArray.length; index++) {
    if (numberArray[index] === numberArray[index - 1]) {
      duplicateNumberArray.push(numberArray[index]);
    }
  }
  return duplicateNumberArray;
};
