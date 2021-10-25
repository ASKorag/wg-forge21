module.exports = function range(from: number, ...rest: number[]): number[] {
  const res: number[] = []

  if (isNormDig(from) && rest.length === 0) {
    for (let i = 0; i < from; i++) {
      res.push(i)
    }
    return res
  }

  const to = rest[0]
  if (isNormDig(from) && isNormDig(to) && rest.length === 1) {
    if (from < to) {
      for (let i = from; i < to; i++) {
        res.push(i)
      }
    } else {
      for (let i = from; i > to; i--) {
        res.push(i)
      }
    }
    return res
  }
  let step = rest[1]
  if (isNormDig(from) && isNormDig(to) && isNormDig(step) && rest.length === 2) {
    if ((from < to && step < 0) || (from > to && step > 0)) {
      return []
    }
    if ((from < to && step > 0) || (from > to && step < 0)) {
      if (from < to) {
        for (let i = from; i < to; i = i + step) {
          res.push(i)
        }
      } else {
        for (let i = from; i > to; i = i + step) {
          res.push(i)
        }
      }
      return res
    }
  }

  return []
}

function isNormDig(arg?: number) {
  return (arg !== undefined && arg !== null && !Number.isNaN(arg) && Number.isInteger(arg))
}