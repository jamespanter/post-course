// 12: How can a given string be reversed using recursion?

export const reverseWithRecursion = (text: string): string => {
  if (text != "") {
    return reverseWithRecursion(text.substr(1)) + text.charAt(0);
  } else {
    return text;
  }
};
