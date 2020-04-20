// How do you remove duplicate numbers from an array?

export const removeDuplicates = (numberArray: number[]) => {
  return numberArray.filter((value: number, index: number) => {
    return numberArray.indexOf(value) == index;
  });
};
