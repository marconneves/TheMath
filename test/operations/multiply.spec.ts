import TheMath from '../../src';

describe('Multiply operations', () => {
  it('can calculate 10 multiply 5 ', () => {
    const result = TheMath.multiply(10, 5);

    expect(result).toBe(50);
  });

  it('can calculate 5 multiply 12', () => {
    const result = TheMath.multiply(5, 12);

    expect(result).toBe(60);
  });

  it('can calculate -12 multiply 3', () => {
    const result = TheMath.multiply(-12, 3);

    expect(result).toBe(-36);
  });

  it('can calculate 12 multiply 0 and inverse', () => {
    const firstResult = TheMath.multiply(12, 0);
    expect(firstResult).toBe(0);

    const secondResult = TheMath.multiply(0, 12);
    expect(secondResult).toBe(0);
  });

  it('can calculate 0.3 multiply 0.2', () => {
    const result = TheMath.multiply(0.3, 0.2);

    expect(result).toBe(0.06);
  });
});
