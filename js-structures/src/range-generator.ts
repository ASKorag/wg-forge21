module.exports = function* range(from: number, to?: number, step?: number) {
  [from, to, step] = normalizeArgs(from, to, step)

  if (isCorrectStepSign(from, to, step)) {
    const diff = Math.abs(from - to)
    if (diff < step) {  //too large step
      yield  from
    } else {
      const rangeSize = Math.ceil(diff / Math.abs(step))

      let curValue = from
      for (let i = 0; i < rangeSize; i++) {
        yield curValue
        curValue += step
      }
    }
  }
}

//allows a range call with an incomplete number of arguments to be corrected into a range call with all arguments
function normalizeArgs(from, to, step) {
  if (to === undefined) {
    if (from > 0) {
      return [0, from, 1]
    }
  } else {
    if (step === undefined) {
      return [from, to, from < to ? 1 : -1]
    }
  }
  return [from, to, step]
}

//checking the coincidence of the sign of the step and the direction (increasing / decreasing) of filling the range
function isCorrectStepSign(from, to, step) {
  return (from < to && step > 0) || (from > to && step < 0)
}
