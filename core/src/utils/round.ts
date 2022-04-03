export default function round(
  operation: { number: number },
  options?: {
    precision?: number;
    roundType?: 'floor' | 'ceil' | 'round';
  }
) {
  const { precision = 0, roundType = 'round' } = options || {};
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

  return operation.number;
}
