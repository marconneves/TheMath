import resolve from '../../src/resolve';

describe('resolve', () => {
  it('should correctly calculate the power of a number', () => {
    expect(resolve('2^3')).toBe(8);
  });

  it('should correctly calculate chained exponentiation', () => {
    expect(resolve('2^3^2')).toBe(512);
  });

  it('should correctly calculate the power of a number with other operations', () => {
    expect(resolve('2*3^2')).toBe(18);
  });

  it('should handle fractional bases with integer exponents in an expression', () => {
    expect(resolve('0.5^2')).toBe(0.25);
  });

  it('should handle negative exponents in an expression', () => {
    expect(resolve('2^-3')).toBe(0.125);
  });

  it('should handle negative fractional bases in an expression', () => {
    expect(resolve('-0.5^2')).toBe(-0.25);
  });

  it('should throw an error for non-integer exponents', () => {
    expect(() => resolve('2^0.5')).toThrow(
      'Non-integer exponents are not supported.'
    );
  });
});
