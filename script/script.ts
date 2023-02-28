export const multiply = (args: number[]): number => {
  if (args.length >= 31) {
    throw new Error("Too many arguments.");
  }
  return args.reduce((arg, sum) => sum * arg, 1);
};
export const add = (args: number[]): number | "too big" => {
  if (args.length >= 31) {
    throw new Error("Too many arguments.");
  }

  const result = args.reduce((arg, sum) => sum + arg, 0);
  if (result > 1000) return "too big";

  return result;
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
