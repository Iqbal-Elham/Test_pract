const str_len = require('./string_length');

test('return the length of string', () => {
  expect(str_len('iqbal')).toBe(5);
});
test('return the length of string', () => {
  expect(() => (str_len(''))).toThrow(Error);
});
test('return the length of string', () => {
  expect(() => (str_len('jasdflwkerlq'))).toThrow(Error);
});