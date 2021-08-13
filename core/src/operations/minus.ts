import numberCorrectional from '../utils/numberCorrectional';

export default function minus(
  firstNumber: number,
  secondNumber: number
): number {
  const correctional = numberCorrectional(firstNumber, secondNumber);

  const number =
    (correctional * firstNumber - correctional * secondNumber) / correctional;

  const endNumber = number;

  return endNumber;
}
