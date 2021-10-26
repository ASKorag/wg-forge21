module.exports = function pow(base: number, exp: number): number {
  validateArgs(base, exp)
  let res = 1
  const initExp = exp
  while (Math.abs(exp) > 0) {
    if (exp % 2 !== 0) {
      res *= base
      exp > 0 ? exp-- : exp++
    }
    base *= base
    exp /= 2
  }
  return initExp > 0 ? res : 1 / res
}

function validateArgs(base: any, exp: any) {
  if (base === undefined || exp === undefined) {
    throw new Error('Must be 2 integer arguments')
  }
  if (!Number.isInteger(base) || !Number.isInteger(exp)) {
    throw new Error('Arguments must be integer')
  }
}