const curry = require('../dist/currying.js')

const point = (x, y, z) => [x, y, z]
const curried = curry(point)

test('Run with incorrect argument', () => {
  expect(() => {
    curry(1)
  }).toThrow(new TypeError('Argument must be a function'))

  expect(() => {
    curry(true)
  }).toThrow(new TypeError('Argument must be a function'))

  expect(() => {
    curry({})
  }).toThrow(new TypeError('Argument must be a function'))
})

test('Run ...', () => {
  expect(curried(1, 2, 3, 4)).toEqual([1, 2, 3])
  expect(curried(1)(2)(3)).toEqual([1, 2, 3])
  expect(curried(1, 2)(3)).toEqual([1, 2, 3])
  expect(curried(1)(2, 3)).toEqual([1, 2, 3])
  expect(curried(1, 2, 3)).toEqual([1, 2, 3])
})