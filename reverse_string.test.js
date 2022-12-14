const reverse = require('./reverse_string');

test('reverse a string', () => 
{
  expect(reverse('hello')).toBe("olleh");
});