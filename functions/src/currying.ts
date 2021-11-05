module.exports = function curry(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Argument must be a function')
  }
  return function curriedFunc(...args) {
    return args.length >= func.length ? func(...args) : (...rest) => curriedFunc(...args, ...rest)
  }
}
