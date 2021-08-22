export function numberCorrectional(number: number): number {
  const stringNumber = String(number);

  const [beforeTrace, afterTrace] = stringNumber.split('e-');
  let numberOfCases = 0;

  if (afterTrace) {
    const [, afterDot] = beforeTrace.split('.');

    if (afterDot && afterDot.length > 2) {
      numberOfCases = afterDot.length + Number(afterTrace);
    } else {
      numberOfCases = Number(afterTrace);
    }
  } else {
    const [, afterDot] = stringNumber.split('.');

    numberOfCases = afterDot ? afterDot.length : 0;
  }

  const correctionalBase = 10 ** numberOfCases;
  if (correctionalBase < 10 && correctionalBase > 1)
    console.table({ number, correctionalBase, numberOfCases });

  return correctionalBase;
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
