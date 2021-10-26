module.exports = function range(from: number, to?: number, step = from < to ? 1 : -1): number[] {
  if (to === undefined) {
    return from < 0 ? [] : Array.from(Array(from), (d, index) => index)
  } else {
    if ((from < to && step < 0) || (from > to && step > 0)) {
      return []
    }
    const diff = Math.max(from, to) - Math.min(from, to)
    if (diff < step) {
      return [from]
    } else {
      const amount = Math.ceil(diff / Math.abs(step))
      return Array.from(Array(amount), (d, index) => index === 0 ? from : from += step)
    }
  }
}
