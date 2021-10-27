module.exports = function curry(func: TFunc): TFunc {
  if (typeof func !== 'function') {
    throw new TypeError('Argument must be a function')
  }

  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args)
    }
    return function (...rest) {
      return curried.apply(this, [...args, ...rest])
    }
  }
}

type TFunc = (...args: any[]) => any