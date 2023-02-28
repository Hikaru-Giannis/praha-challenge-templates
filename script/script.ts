export const multiply = (args: number[]): number => {
  if (args.length >= 31) {
    throw new Error("Too many arguments.");
  }
  return args.reduce((arg, sum) => sum * arg, 1);
};
export const add = (args: number[]): number => {
  if (args.length >= 31) {
    throw new Error("Too many arguments.");
  }
  return args.reduce((arg, sum) => sum + arg, 0);
};
export const subtract = (args: number[]): number => {
  if (args.length >= 31) {
    throw new Error("Too many arguments.");
  }
  const [initial, ...rests] = args;
  return rests.reduce((rest, sum) => rest - sum, initial);
};
export const divide = (args: number[]): number => {
  if (args.length >= 31) {
    throw new Error("Too many arguments.");
  }
  const [initial, ...rests] = args;
  return rests.reduce((rest, sum) => rest / sum, initial);
};
