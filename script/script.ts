export const multiply = (args: number[]): number | "big big number" => {
  if (args.length >= 31) {
    throw new Error("Too many arguments.");
  }
  const result = args.reduce((arg, sum) => sum * arg, 1);
  if (result > 1000) return "big big number";
  return result;
};
export const add = (args: number[]): number | "too big" => {
  if (args.length >= 31) {
    throw new Error("Too many arguments.");
  }

  const result = args.reduce((arg, sum) => sum + arg, 0);
  if (result > 1000) return "too big";

  return result;
};
export const subtract = (args: number[]): number | "negative number" => {
  if (args.length >= 31) {
    throw new Error("Too many arguments.");
  }
  const [initial, ...rests] = args;
  const result = rests.reduce((rest, sum) => rest - sum, initial);
  if (result < 0) return "negative number";
  return result;
};
export const divide = (args: number[]): number => {
  if (args.length >= 31) {
    throw new Error("Too many arguments.");
  }
  const [initial, ...rests] = args;
  const result = rests.reduce((rest, sum) => rest / sum, initial);
  return Number(result.toFixed(10));
};
