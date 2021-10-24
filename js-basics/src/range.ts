module.exports = function range(from: number, to?: number, step?: number): number[] {

  // validateArgs(from, to, step)

  const result: number[] = []

  if ((from < to && step < 0) || (from > to && step > 0)) {
    return []
  }

  if (to === undefined) {
    for (let i = 0; i < from; i++) {
      result.push(i)
    }
  }

  if (step === undefined) {
    if (from < to) {
      for (let i = from; i < to; i++) {
        result.push(i!)
      }
    } else {
      for (let i = from; i > to; i--) {
        result.push(i!)
      }
    }
  } else {


    step = Math.abs(step)
    if (from < to) {
      for (let i = from; i < to; i = i + step) {
        result.push(i!)
      }
    } else {
      for (let i = from; i > to; i = i - step) {
        result.push(i!)
      }
    }
  }


  return result
}

// function validateArgs(from: number, to?: number, step?: number) {
//   /*if (Number.isNaN(from) || Number.isNaN(to) || Number.isNaN(step)) {
//     throw new Error('Arguments must be number')
//   }*/
//   if (from === undefined) {
//     throw new Error('Must be 1 or more arguments')
//   }
//   if (from < 0 && to === undefined) {
//     throw new Error('Length must be more than 0')
//   }
//   if (step === 0) {
//     throw new Error(`Step can't be equal 0`)
//   }
//   if (Number.isNaN(+from)) {
//     throw new Error('Length must be number')
//   }
// }
