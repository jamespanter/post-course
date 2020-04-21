// 06: How do you find all pairs of an integer array whose sum is equal to a given number?

export const findPairsWhichSum = (
  numberArray: number[],
  goal: number
): number[][] => {
  let arrayOfNumbersClone: number[] = [...numberArray];
  let arrayOfPairs: number[][] = [];

  for (let index = 0; index < arrayOfNumbersClone.length; index++) {
    const lookupValueForSum: number = goal - arrayOfNumbersClone[index];
    const number: number = arrayOfNumbersClone[index];
    const indexOfLookUpNumber: number = arrayOfNumbersClone.indexOf(
      lookupValueForSum
    );

    if (indexOfLookUpNumber !== -1 && indexOfLookUpNumber !== number) {
      arrayOfPairs.unshift([lookupValueForSum, number]);
      arrayOfNumbersClone.splice(indexOfLookUpNumber, 1);
      arrayOfNumbersClone.splice(lookupValueForSum, 1);
    }
  }
  console.log(arrayOfPairs);
  return arrayOfPairs;
};

// Doesnt pass test because tests require the pairs to be returned in a set order that doesnt appear to be consistant.

// My answers:

// console.log Javascript Katas/solutions/q06-challenge.ts:23
// [ [ 3, 1 ], [ 2, 2 ] ]

// console.log Javascript Katas/solutions/q06-challenge.ts:23
// [ [ 7, 5 ], [ 4, 8 ] ]

// console.log Javascript Katas/solutions/q06-challenge.ts:23
// [ [ 7, 5 ], [ 4, 8 ], [ 6, 6 ] ]
