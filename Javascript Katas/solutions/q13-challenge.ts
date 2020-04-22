// 13. How do you check if two strings are a rotation of each other?

export const areRotations = (text1: string, text2: string): boolean => {
  if (text1.length === text2.length) {
    for (let index = 0; index < text1.length; index++) {
      let isRotation: string = `${text1.substr(index)}${text1.substr(
        0,
        index
      )}`;
      if (isRotation === text2) {
        return true;
      }
    }
  }
  return false;
};
