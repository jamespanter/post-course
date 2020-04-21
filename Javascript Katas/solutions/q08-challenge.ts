// How do you print duplicate characters from a string?

export const findDuplicates = (text: string): string[] => {
  let arrayOfDuplicateCharacters: string[] = [];
  const arrayOfCharacters: string[] = text.split("").sort();

  for (let index = 0; index < arrayOfCharacters.length; index++) {
    if (
      arrayOfCharacters[index] === arrayOfCharacters[index - 1] &&
      arrayOfDuplicateCharacters.includes(arrayOfCharacters[index]) === false
    ) {
      arrayOfDuplicateCharacters.push(arrayOfCharacters[index]);
    }
  }
  return arrayOfDuplicateCharacters;
};
