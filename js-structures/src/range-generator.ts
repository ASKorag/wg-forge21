module.exports = function* range(from: number, to?: number, step = from < to! ? 1 : -1) {
  let result: number[] = []

  if (to === undefined) {
    result = from < 0 ? [] : Array.from(Array(from), (d, index) => index)
  } else {
    if ((from < to && step > 0) || (from > to && step < 0)) {
      const diff = Math.max(from, to) - Math.min(from, to)
      if (diff < step) {
        result = [from]
      } else {
        const amount = Math.ceil(diff / Math.abs(step))
        result = Array.from(Array(amount), (d, index) => index === 0 ? from : from += step)
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    yield result[i]
  }
}
