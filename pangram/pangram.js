//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (text) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (const letter of alphabet) {
    if (text.toLowerCase().search(letter) == -1) {
      return false;
    }
  }

  return true;
};
