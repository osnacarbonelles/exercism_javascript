//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n, times = 0) => {
  if (n < 1) {
    throw new Error("Solo se permiten números positivos");
  } else if (n === 1) {
    return times;
  } else {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3 * n + 1;
    }
    times++;
    return steps(n, times);
  }
};
