export const missingNumberInSequence = (numberArray: number[]) => {
  let smallestNumber: number;
  let largestNumber: number;
  let missingNumbersArray: number[] = [];

  numberArray.forEach((number: number) => {
    if (number < smallestNumber || smallestNumber === undefined) {
      smallestNumber = number;
    }
  });

  numberArray.forEach((number: number) => {
    if (number > largestNumber || largestNumber === undefined) {
      largestNumber = number;
    }
  });

  const sortnumberArray = (array: number[]) => {
    array.sort((a: number, b: number) => {
      return a - b;
    });
  };

  sortnumberArray(numberArray);

  for (let index = 0; index < largestNumber - smallestNumber; index++) {
    if (numberArray[index] !== smallestNumber + index) {
      numberArray.push(smallestNumber + index);
      missingNumbersArray.push(smallestNumber + index);
      sortnumberArray(numberArray);
    }
  }
  return missingNumbersArray;
};
