export const multiply = (args: number[]): number => {
  return args.reduce((arg, sum) => sum * arg, 1);
};
export const add = (args: number[]): number => {
  return args.reduce((arg, sum) => sum + arg, 0);
};
export const subtract = (args: number[]): number => {
  const [initial, ...rests] = args;
  return rests.reduce((rest, sum) => rest - sum, initial);
};
export const divide = (args: number[]): number => {
  const [initial, ...rests] = args;
  return rests.reduce((rest, sum) => rest / sum, initial);
};
