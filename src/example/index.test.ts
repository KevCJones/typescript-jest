
import each from 'jest-each';

import add1 from './index';

describe('Example function - add1 function', () => {
    describe(`Calling add1`, () => {
      each([
        [1, 2],
        [-1, 0],
      ]).test('with %s returns %s', (inputValue: number, expected: number) => {
        expect(add1(inputValue)).toBe(expected);
      });
    });
});