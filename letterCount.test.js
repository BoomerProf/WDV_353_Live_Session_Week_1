// 3 functions describe(). test() expect()
const letterCount = require('./letterCount');

describe('Letter Count Tests', () => {
  test('As a user I want to count the characters in a string', () => {
    expect(letterCount('awesome', 'e')).toEqual(2);
  });

  test('Negative Test for Letter Count', () => {
    expect(letterCount('Hello', 'o')).not.toBe(0);
  });
});
