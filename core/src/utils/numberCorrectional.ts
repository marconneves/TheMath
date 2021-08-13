export function numberCorrectional(number: number): number {
  const stringNumber = String(number);

  const [beforeTrace, afterTrace] = stringNumber.split('-');

  let numberOfCases = 0;

  if (afterTrace) {
    const [, afterDot] = beforeTrace.split('.');

    if (afterDot && afterDot.length > 2) {
      numberOfCases = afterDot.length - 1 + Number(afterTrace);
    } else {
      numberOfCases = Number(afterTrace);
    }
  } else {
    const [, afterDot] = stringNumber.split('.');

    numberOfCases = afterDot ? afterDot.length : 0;
  }

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
