module.exports = function* range(from: number, to?: number, step?: number) {
  [from, to, step] = normalizeArgs(from, to, step)

  if (isCorrectStepSign(from, to, step)) {
    const diff = Math.abs(from - to)
    if (diff < step) {  //too large step
      yield  from
    } else {
      const rangeSize = Math.ceil(diff / Math.abs(step)) //size of range
      checkRangeSize(rangeSize)

      let cur = from
      for (let i = 0; i < rangeSize; i++) {
        yield cur
        cur += step
      }
    }
  }
}

function checkRangeSize(size: number) {
  const MAX_ARR_LENGTH = 2 ** 32 - 1
  if (size > MAX_ARR_LENGTH) {
    throw new RangeError('Invalid array length')
  }
}

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

function isCorrectStepSign(from, to, step) {
  return (from < to && step > 0) || (from > to && step < 0)
}
