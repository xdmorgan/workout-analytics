import { toDecimalPlaces } from './decimal-rounding';

describe('toDecimalPlaces()', () => {
  test('Set max decimal places', async () => {
    expect(toDecimalPlaces(1.234, 0)).toEqual(1);
    expect(toDecimalPlaces(1.234, 1)).toEqual(1.2);
    expect(toDecimalPlaces(1.234, 2)).toEqual(1.23);
    expect(toDecimalPlaces(1.234, 3)).toEqual(1.234);
    expect(toDecimalPlaces(1.234, 4)).toEqual(1.234); // drops trailing zero automatically
  });
});
