module.exports = function pipe(funcArr) {
  return function (arg) {
    return funcArr.reduce((result, func) => func(result), arg)
  }
}
