// 10: How do you print the first non-repeated character from a string?

export const printFirstNonRepeat = (text: string): string => {
  const arrayOfTextChars = text.toLowerCase().split("");

  for (let index = 0; index < arrayOfTextChars.length; index++) {
    if (
      arrayOfTextChars.indexOf(arrayOfTextChars[index]) ===
      arrayOfTextChars.lastIndexOf(arrayOfTextChars[index])
    ) {
      return arrayOfTextChars[index];
    }
    arrayOfTextChars.splice(index, 1);
  }
  return null;
};
