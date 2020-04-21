// 09: How do you check if two strings are anagrams of each other?

export const compareAnagrams = (word1: string, word2: string): boolean => {
  const arrayOfWord1Chars: string[] = word1.toLowerCase().split("").sort();
  const arrayOfWord2Chars: string[] = word2.toLowerCase().split("").sort();

  for (let index = 0; index < arrayOfWord1Chars.length; index++) {
    if (
      arrayOfWord1Chars[index] !== arrayOfWord2Chars[index] ||
      arrayOfWord1Chars.length !== arrayOfWord2Chars.length
    ) {
      return false;
    }
  }
  return true;
};
