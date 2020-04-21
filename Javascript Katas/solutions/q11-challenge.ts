// 11: How do you check if a given string is a palindrome?

export const palindrome = (text: string): boolean => {
  const arrayOfChars: string[] = text
    .toLowerCase()
    .replace(/ /g, "")
    .replace(/_/g, "")
    .replace(/[^\w\s]/gi, "")
    .split("");

  for (let index = 0; index < arrayOfChars.length / 2; index++) {
    if (arrayOfChars[index] !== arrayOfChars[arrayOfChars.length - index - 1]) {
      return false;
    }
  }
  return true;
};
