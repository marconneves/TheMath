import {
  numberCorrectional,
  numberCorrectionalBigger
} from '../../src/utils/numberCorrectional';

describe('Create correctional number of error dot float', () => {
  it('if send 451 need return 1', () => {
    const correctional = numberCorrectional(451);

    expect(correctional).toBe(1);
  });

  it('if send -451 need return 1', () => {
    const correctional = numberCorrectional(-451);

    expect(correctional).toBe(1);
  });

  it('if send -0.21 need return 100', () => {
    const correctional = numberCorrectional(-0.21);

    expect(correctional).toBe(100);
  });

  it('if send 0.001 need return 1000', () => {
    const correctional = numberCorrectional(0.001);

    expect(correctional).toBe(1000);
  });

  it('if send 0.07 need return 100', () => {
    const correctional = numberCorrectional(0.07);

    expect(correctional).toBe(100);
  });

  it('if send 0.000000001 need return 1000000000', () => {
    const correctional = numberCorrectional(0.000000001);

    expect(correctional).toBe(1000000000);
  });

  it('if send 0.07 and 0.3 need return bigger 100', () => {
    const correctional = numberCorrectionalBigger(0.07, 0.3);

    expect(correctional).toBe(100);
  });

  it('if send 0.00000000000000000000000123123123 need return 100000000000000000000000000000000', () => {
    const correctional = numberCorrectional(0.00000000000000000000000123123123);

    expect(correctional).toBe(100000000000000000000000000000000);
  });

  it(' send 0.7 and 0.003 need return bigger 1000', () => {
    const correctional = numberCorrectionalBigger(0.7, 0.003);

    expect(correctional).toBe(1000);
  });

  it(' send 812 and -812 need return bigger 1', () => {
    const correctional = numberCorrectionalBigger(812, -812);

    expect(correctional).toBe(1);
  });

  it(' send 0.12 and -0.122 need return bigger 1000', () => {
    const correctional = numberCorrectionalBigger(0.12, -0.112);

    expect(correctional).toBe(1000);
  });
});
