const rangeGen = require('../dist/range-generator.js')

function rangeOld(from, to, step = from < to ? 1 : -1) {
  if (to === undefined) {
    return from < 0 ? [] : Array.from(Array(from), (d, index) => index)
  } else {
    if ((from < to && step < 0) || (from > to && step > 0)) {
      return []
    }
    const diff = Math.max(from, to) - Math.min(from, to)
    if (diff < step) {
      return [from]
    } else {
      const amount = Math.ceil(diff / Math.abs(step))
      return Array.from(Array(amount), (d, index) => index === 0 ? from : from += step)
    }
  }
}

function collapse(from, to, step) {
  const result = []
  for (let i of rangeGen(from, to, step)) {
    result.push(i)
  }
  return result
}

test('Run with 1 argument only', () => {
  expect(collapse(0)).toEqual(rangeOld(0))
  expect(collapse(9)).toEqual(rangeOld((9)))
  expect(collapse(-89)).toEqual(rangeOld((-89)))
})

test('Run with 2 arguments only', () => {
  expect(collapse(1, 9)).toEqual(rangeOld(1, 9))
  expect(collapse(-5, 5)).toEqual(rangeOld(-5, 5))
  expect(collapse(-10, -5)).toEqual(rangeOld(-10, -5))
  expect(collapse(9, 1)).toEqual(rangeOld(9, 1))
  expect(collapse(5, -5)).toEqual(rangeOld(5, -5))
  expect(collapse(-5, -10)).toEqual(rangeOld(-5, -10))
})

test('Run with 3 arguments, overstep', () => {
  expect(collapse(1, 100, Infinity)).toEqual(rangeOld(1, 100, Infinity))
})

test('Run with 3 arguments, correct step', () => {
  expect(collapse(5, 10, 1)).toEqual(rangeOld(5, 10, 1))
  expect(collapse(5, 10, 2)).toEqual(rangeOld(5, 10, 2))
  expect(collapse(-5, 5, 2)).toEqual(rangeOld(-5, 5, 2))
  expect(collapse(-10, -5, 3)).toEqual(rangeOld(-10, -5, 3))
  expect(collapse(10, 5, -1)).toEqual(rangeOld(10, 5, -1))
  expect(collapse(10, 5, -2)).toEqual(rangeOld(10, 5, -2))
  expect(collapse(5, -5, -2)).toEqual(rangeOld(5, -5, -2))
  expect(collapse(-5, -10, -3)).toEqual(rangeOld(-5, -10, -3))
})

test('Run with 3 arguments, incorrect step', () => {
  expect(collapse(5, 10, -1)).toEqual(rangeOld(5, 10, -1))
  expect(collapse(5, 10, -2)).toEqual(rangeOld(5, 10, -2))
  expect(collapse(-5, 5, -2)).toEqual(rangeOld(-5, 5, -2))
  expect(collapse(-10, -5, -3)).toEqual(rangeOld(-10, -5, -3))
  expect(collapse(10, 5, 1)).toEqual(rangeOld(10, 5, 1))
  expect(collapse(10, 5, 2)).toEqual(rangeOld(10, 5, 2))
  expect(collapse(5, -5, 2)).toEqual(rangeOld(5, -5, 2))
  expect(collapse(-5, -10, 3)).toEqual(rangeOld(-5, -10, 3))
})

test('Run with overflow', () => {
  const maxNum = Number.MAX_SAFE_INTEGER
  expect(collapse(maxNum, maxNum + 5))
    .toEqual(rangeOld(maxNum, maxNum + 5))
})

test('Run with very big output', () => {
  expect(() => {
    collapse(2 ** 32)
  }).toThrowError(new RangeError('Invalid array length'))
})
