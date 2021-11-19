module.exports = function* range(from: number, to?: number, step = from < to! ? 1 : -1) {
  if (to === undefined) {
    if (from > 0) {
      checkArrLength(from)
      for (let i = 0; i < from; i++) {
        yield i
      }
    }
  } else {
    if ((from < to && step > 0) || (from > to && step < 0)) { //check correct sign of step
      const diff = Math.max(from, to) - Math.min(from, to)
      if (diff < step) {  //too large step
        yield  from
      } else {
        const amount = Math.ceil(diff / Math.abs(step)) //size of array
        checkArrLength(amount)

        let cur = from
        for (let i = 0; i < amount; i++) {
          yield cur
          cur += step
        }
      }
    }
  }
}

function checkArrLength(size: number) {
  const MAX_ARR_SIZE = 2 ** 32 - 1
  if (size > MAX_ARR_SIZE) {
    throw new RangeError('Invalid array length')
  }
}
