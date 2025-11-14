import multiply from '../operations/multiply';

export default function abs(number: number): number {
  if (number < 0) {
    return multiply(number, -1);
  }
  return number;
}
