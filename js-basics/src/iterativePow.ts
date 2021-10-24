module.exports = function pow(base: number, exp: number): number {
  validateArgs(base, exp)
  let res = 1
  for (let i = 0; i < Math.abs(exp); i++) {
    res *= base
  }
  return exp > 0 ? res : 1 / res
}

function validateArgs(base: any, exp: any) {
  if (base === undefined || exp === undefined) {
    throw new Error('Must be 2 integer arguments')
  }
  if (!Number.isInteger(base) || !Number.isInteger(exp)) {
    throw new Error('Arguments must be integer')
  }
}