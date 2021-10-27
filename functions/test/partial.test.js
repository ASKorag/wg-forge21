const partial = require('../dist/partial.js')

const vol4D = (a, b, c, d) => a * b * c * d

const firstArg = 10
const secArg = 2
const thirdArg = 3
const fourthArg = 1.55

test('Run with incorrect first argument', () => {
  expect(() => {
    partial(42, 8, 8)
  }).toThrowError(new TypeError('First argument must be a function'))
  expect(() => {
    partial('78', 8, 8)
  }).toThrow(new TypeError('First argument must be a function'))
  expect(() => {
    partial({}, 8, 8)
  }).toThrow(new TypeError('First argument must be a function'))
  expect(() => {
    partial(true, 8, 8)
  }).toThrow(new TypeError('First argument must be a function'))
})

test('Run with 1 argument', () => {
  const vol4D_1 = partial(vol4D, firstArg)
  const vol4D_2 = partial(vol4D_1, secArg)
  const vol4D_3 = partial(vol4D_2, thirdArg)
  expect(vol4D_3(1.55)).toBe(vol4D(firstArg, secArg, thirdArg, fourthArg))
})

test('Run with 2 arguments', () => {
  const vol4D_1 = partial(vol4D, firstArg, secArg)
  expect(vol4D_1(thirdArg, fourthArg)).toBe(vol4D(firstArg, secArg, thirdArg, fourthArg))
})

test('Run with random amount of arguments', () => {
  const vol4D_1 = partial(vol4D, firstArg)
  expect(vol4D_1(secArg, thirdArg, fourthArg)).toBe(vol4D(firstArg, secArg, thirdArg, fourthArg))

  const vol4D_2 = partial(vol4D, firstArg, secArg, thirdArg)
  expect(vol4D_2(fourthArg)).toBe(vol4D(firstArg, secArg, thirdArg, fourthArg))

  const vol4D_3 = partial(vol4D, firstArg)
  const vol4D_4 = partial(vol4D_3, secArg)
  expect(vol4D_4(thirdArg, fourthArg)).toBe(vol4D(firstArg, secArg, thirdArg, fourthArg))

  const vol4D_5 = partial(vol4D, firstArg, secArg)
  const vol4D_6 = partial(vol4D_5, thirdArg)
  expect(vol4D_6(fourthArg)).toBe(vol4D(firstArg, secArg, thirdArg, fourthArg))
})
