const pipe = require('../dist/composition.js')

const add = y => x => x + y
const sub = y => x => x - y
const mul = y => x => x * y
const div = y => x => x / y

//  (x + 100) * 3 / 4 - 1
const firstOPD = 100
const secOPD = 3
const thirdOPD = 4
const fourthOPD = 1
const result = sub(fourthOPD)(div(thirdOPD)(mul(secOPD)(add(firstOPD)(0))))

test('Run example', () => {
  const solve = pipe([add(firstOPD), mul(secOPD), div(thirdOPD), sub(fourthOPD)])
  expect(solve(0)).toBe(result)
})