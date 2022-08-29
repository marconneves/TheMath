import TheMath from '../../src';

describe('Divide operations', () => {
  it('can calculate 10 divide 5 ', () => {
    const result = TheMath.divide(10, 5);

    expect(result).toBe(2);
  });

  it('can calculate 5 divide 12', () => {
    const result = TheMath.divide(5, 12);

    expect(result).toBe(0.4166666666666667);
  });

  it('can calculate -12 divide 3', () => {
    const result = TheMath.divide(-12, 3);

    expect(result).toBe(-4);
  });

  it('can calculate 12 divide 0 and inverse', () => {
    const firstResult = TheMath.divide(12, 0);
    expect(firstResult).toBe(Infinity);

    const secondResult = TheMath.divide(0, 12);
    expect(secondResult).toBe(0);
  });

  it('can calculate 0.3 divide 0.2', () => {
    const result = TheMath.divide(0.3, 0.2);

    expect(result).toBe(1.5);
  });
});
