import powerOf from '../../src/operations/powerOf';

describe('powerOf', () => {
  it('should correctly calculate the power of a number', () => {
    expect(powerOf(2, 3)).toBe(8);
  });

  it('should correctly calculate the power of a negative number', () => {
    expect(powerOf(-2, 3)).toBe(-8);
  });

  it('should correctly calculate the power of a number to the power of 0', () => {
    expect(powerOf(2, 0)).toBe(1);
  });

  it('should handle fractional bases with integer exponents', () => {
    expect(powerOf(0.5, 2)).toBe(0.25);
  });

  it('should handle negative exponents', () => {
    expect(powerOf(2, -3)).toBe(0.125);
  });

  it('should handle negative fractional bases', () => {
    expect(powerOf(-0.5, 2)).toBe(0.25);
  });
});
