import test from 'ava';
import { isOdd, isEven } from '.';

test('isOdd', t => {
  t.true(isOdd(13));
});

test('isEven', t => {
  t.true(isEven(8));
});
