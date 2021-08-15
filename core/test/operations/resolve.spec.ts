import TheMath from '../../src';

describe('Resolve string operations', () => {
  test("can resolve '0.1+0.2'", () => {
    const result = TheMath.resolve('0.1+0.2');

    expect(result).toBe(0.3);
  });

  test("can resolve '12x10'", () => {
    const result = TheMath.resolve('12x10');

    expect(result).toBe(120);
  });

  test("can resolve '12/10'", () => {
    const result = TheMath.resolve('12/10');

    expect(result).toBe(1.2);
  });

  test("can resolve '12-10'", () => {
    const result = TheMath.resolve('12-10');

    expect(result).toBe(2);
  });

  test("can resolve '12+10'", () => {
    const result = TheMath.resolve('12+10');

    expect(result).toBe(22);
  });

  test("can resolve '82-3*12-4'", () => {
    const result = TheMath.resolve('82-3*12-4');

    expect(result).toBe(42);
  });

  test("can resolve '11*22/12*2'", () => {
    const result = TheMath.resolve('11*22/12*2');

    expect(Number(result.toFixed(2))).toBe(40.33);
  });

  test("can resolve '55*12*11+1'", () => {
    const result = TheMath.resolve('55*12*11+1');

    expect(result).toBe(7261);
  });

  test("can resolve '6584/54/5-2'", () => {
    const result = TheMath.resolve('6584/54/5-2');

    expect(Number(result.toFixed(3))).toBe(22.385);
  });

  test("can resolve '5*4*(5+4*3)'", () => {
    const result = TheMath.resolve('5*4*(5+4*3)');

    expect(result).toBe(340);
  });

  test("can resolve '5*4*((5+4)*3)'", () => {
    const result = TheMath.resolve('5*4*((5+4)*3)');

    expect(result).toBe(540);
  });

  test("can resolve '12*(5*(1+1))'", () => {
    const result = TheMath.resolve('12*(5*(1+1))');

    expect(result).toBe(120);
  });

  test("can resolve '12*(5*(1+1))+(12+11*3)'", () => {
    const result = TheMath.resolve('12*(5*(1+1))+(12+11*3)');

    expect(result).toBe(165);
  });
});
