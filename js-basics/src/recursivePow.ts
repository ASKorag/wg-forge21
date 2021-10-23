module.exports = function pow(base: number, exp: number): number {
  validateArgs(base, exp)
  if (exp === 0) {
    return 1
  }
  if (exp === 1) {
    return base
  }
  if (exp > 0) {
    return base * pow(base, exp - 1)
  } else {
    return 1 / base * pow(base,exp + 1)
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
