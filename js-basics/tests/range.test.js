const range = require('../dist/range.js')

test('Run without arguments', () => {
  expect(range()).toEqual([])
})

test('Run with 1 argument only', () => {
  expect(range(0)).toEqual([])
  expect(range(5)).toEqual([0, 1, 2, 3, 4])
  expect(range(9)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8])
  expect(range(-5)).toEqual([])
  expect(range(-89)).toEqual([])
})

test('Run with 2 arguments only', () => {
  expect(range(1, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  expect(range(10, 15)).toEqual([10, 11, 12, 13, 14])
  expect(range(-5, 5)).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4])
  expect(range(-10, -5)).toEqual([-10, -9, -8, -7, -6])
  expect(range(-6, 1)).toEqual([-6, -5, -4, -3, -2, -1, 0])
  expect(range(9, 1)).toEqual([9, 8, 7, 6, 5, 4, 3, 2])
  expect(range(15, 10)).toEqual([15, 14, 13, 12, 11])
  expect(range(5, -5)).toEqual([5, 4, 3, 2, 1, 0, -1, -2, -3, -4])
  expect(range(-5, -10)).toEqual([-5, -6, -7, -8, -9])
  expect(range(1, -6)).toEqual([1, 0, -1, -2, -3, -4, -5])
})

test('Run with 3 arguments, correct step', () => {
  expect(range(5, 10, 1)).toEqual([5, 6, 7, 8, 9])
  expect(range(5, 10, 2)).toEqual([5, 7, 9])
  expect(range(-5, 5, 2)).toEqual([-5, -3, -1, 1, 3])
  expect(range(-10, -5, 3)).toEqual([-10, -7])
  expect(range(10, 5, -1)).toEqual([10, 9, 8, 7, 6])
  expect(range(10, 5, -2)).toEqual([10, 8, 6])
  expect(range(5, -5, -2)).toEqual([5, 3, 1, -1, -3])
  expect(range(-5, -10, -3)).toEqual([-5, -8])
  expect(range(-5, -10, -1.5)).toEqual([-5, -6.5, -8, -9.5])
})
//
test('Run with 3 arguments, incorrect step', () => {
  expect(range(5, 10, -1)).toEqual([])
  expect(range(5, 10, -2)).toEqual([])
  expect(range(-5, 5, -2)).toEqual([])
  expect(range(-10, -5, -3)).toEqual([])
  expect(range(10, 5, 1)).toEqual([])
  expect(range(10, 5, 2)).toEqual([])
  expect(range(5, -5, 2)).toEqual([])
  expect(range(-5, -10, 3)).toEqual([])
})

test('Run with overflow', () => {
  const maxNum = Number.MAX_SAFE_INTEGER
  expect(range(maxNum, maxNum + 5))
    .toEqual([9007199254740991, 9007199254740992, 9007199254740992, 9007199254740992, 9007199254740992])
})



