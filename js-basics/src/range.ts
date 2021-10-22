module .exports = function range(from: number, to?: number, step?: number): number[] {
  validateArgs(from, step)
  const result: number[] = []

  if (to === undefined) {
    for (let i = 0; i < from; i++) {
      result.push(i)
    }
  }
  return result
}

function validateArgs(from: number, step?: number) {
  if (from === undefined) {
    throw Error('Must be 1 or more arguments')
  }
  if (from < 0) {
    throw Error('Length must be more than 0')
  }
  if (step === 0) {
    throw Error(`Step can't be equal 0`)
  }
  if (Number.isNaN(+from)) {
    throw Error('Length must be number')
  }
}
