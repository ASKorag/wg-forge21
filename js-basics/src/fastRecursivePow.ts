module.exports = function pow(base: number, exp: number): number {
  validateArgs(base, exp)
  if (exp === 0) {
    return 1
  }
  if (exp > 0) {
    return exp % 2 === 0
      ? pow(base * base, exp / 2)
      : base * pow(base * base, (exp - 1) / 2)
  } else {
    return exp % 2 === 0
      ? pow(base * base, exp / 2)
      : 1 / base * pow(base * base, (exp + 1) / 2)
  }
}

function validateArgs(base: any, exp: any) {
  if (base === undefined || exp === undefined) {
    throw new Error('Must be 2 integer arguments')
  }
  if (!Number.isInteger(base) || !Number.isInteger(exp)) {
    throw new Error('Arguments must be integer')
  }
}