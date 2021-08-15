import TheMath from '../../src';

describe('Minus operations', () => {
  it('can calculate 10 minus 5 ', () => {
    const result = TheMath.subtract(10, 5);

    expect(result).toBe(5);
  });

  it('can calculate 5 minus 12', () => {
    const result = TheMath.subtract(5, 12);

    expect(result).toBe(-7);
  });

  it('can calculate 12 minus 0 and inverse', () => {
    const firstResult = TheMath.subtract(12, 0);
    expect(firstResult).toBe(12);

    const secondResult = TheMath.subtract(12, 0);
    expect(secondResult).toBe(12);
  });

  it('can calculate 12398172391832131237 minus 12398172391831231237 and inverse', () => {
    const firstResult = TheMath.subtract(
      12398172391832131237,
      12398172391831231237
    );

    expect(firstResult).toBe(901120);
  });

  it('can calculate 0.3 minus 0.2', () => {
    const result = TheMath.subtract(0.3, 0.2);

    expect(result).toBe(0.1);
  });
});
