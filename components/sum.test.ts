import { sum } from './sum';

test('Additionne correctement deux nombres', () => {
  expect(sum(2, 3)).toBe(5);
});
