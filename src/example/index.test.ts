import add1 from './index';

describe('Example function simple', () => {
  it('should add one to input', () => {
    expect(add1(1)).toBe(2);
  })
  it('should add one to negatives', () => {
    expect(add1(-1)).toBe(0);
  })
  it('should throw an error on incorrect inputs', () => {
    expect(() => add1(null as any)).toThrowError();
  })
})