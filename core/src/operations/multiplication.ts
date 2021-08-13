import numberCorrectional from '../utils/numberCorrectional';

export default function multiplication(
  firstNumber: number,
  secondNumber: number
): number {
  const correctional = numberCorrectional(firstNumber, secondNumber);

  const number =
    (correctional * firstNumber * (correctional * secondNumber)) /
    correctional ** 2;

  const endNumber = number;

  return endNumber;
}
