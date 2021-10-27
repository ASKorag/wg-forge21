module.exports = function partial(func: (...rest: any[]) => any, ...args: any[]) {
  if (typeof func !== 'function') {
    throw new TypeError('First argument must be a function')
  }
  return (...rest: any[]) => func(...args, ...rest)
}