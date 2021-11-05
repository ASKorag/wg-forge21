module.exports = function partial(func, ...args) {
  if (typeof func !== 'function') {
    throw new TypeError('First argument must be a function')
  }
  return (...rest) => func(...args, ...rest)
}