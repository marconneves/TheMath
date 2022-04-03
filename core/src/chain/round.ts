export default function round(
  operation: { number: number },
  {
    precision = 0,
    roundType = 'round'
  }: {
    precision?: number;
    roundType?: 'floor' | 'ceil' | 'round';
  }
) {
  if (roundType === 'floor') {
    operation.number =
      Math.floor(operation.number * 10 ** precision) / 10 ** precision;
  }

  if (roundType === 'ceil') {
    operation.number =
      Math.ceil(operation.number * 10 ** precision) / 10 ** precision;
  }

  if (roundType === 'round') {
    operation.number =
      Math.round(operation.number * 10 ** precision) / 10 ** precision;
  }
}
