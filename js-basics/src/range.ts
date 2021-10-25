module.exports = function range(from: number, to?: number, step?: number): number[] {
  const result: number[] = []

  if ((from < to && step < 0) || (from > to && step > 0)) {
    return []
  }

  if (to === undefined) {
    for (let i = 0; i < from; i++) {
      result.push(i)
    }
  } else {
    if (step === undefined) {
      step = from < to ? 1 : -1
    }
    let diff = from < to ? to - from : from - to
    let value = from
    while(diff > 0) {
      result.push(value)
      value += step
      diff -= Math.abs(step)
    }
  }

  return result
}
