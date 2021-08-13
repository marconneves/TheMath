export function numberCorrectional(number: number): number {
  const stringNumber = String(number);

  const [, afterDot] = stringNumber.split('.');

  const numberOfCases = afterDot.length;

  const correctionalBase = 10 ** numberOfCases;

  return correctionalBase < 10 ? 10 : correctionalBase;
}

export const numberCorrectionalBigger = (
  firstNumber: number,
  secondNumber: number
): number => {
  const correctionalFirst = numberCorrectional(firstNumber);
  const correctionalSecond = numberCorrectional(secondNumber);

  const correctional =
    correctionalFirst > correctionalSecond
      ? correctionalFirst
      : correctionalSecond;

  return correctional;
};
