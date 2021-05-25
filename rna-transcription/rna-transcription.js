//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  const t = {
    "": "",
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  let nuc = dna.split("");
  return nuc.reduce((acc, elem) => {
    return acc + t[elem];
  }, "");
};
