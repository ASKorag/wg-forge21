module.exports = function curry(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Argument must be a function')
  }
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args)
    }
    return (...rest) => curriedFunc(...args, ...rest)
  }
}
