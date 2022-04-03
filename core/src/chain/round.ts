export default function round(
  operation: { number: number },
  {
    decimal = 0,
    roundType = 'round'
  }: {
    decimal?: number;
    roundType?: 'floor' | 'ceil' | 'round';
  }
) {
  if (roundType === 'floor') {
    operation.number =
      Math.floor(operation.number * 10 ** decimal) / 10 ** decimal;
  }

  if (roundType === 'ceil') {
    operation.number =
      Math.ceil(operation.number * 10 ** decimal) / 10 ** decimal;
  }

  if (roundType === 'round') {
    operation.number =
      Math.round(operation.number * 10 ** decimal) / 10 ** decimal;
  }
}
