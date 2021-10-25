// module.exports = function range(from: number, to?: number, step?: number): number[] {
//   const res: number[] = []
//   ////////---------------- 1 Arg
//   if (isNormDig(from) && (!isNormDig(to) && !isNormDig(step))) {
//     for (let i = 0; i < from; i++) {
//       res.push(i)
//     }
//   }
//   ////////---------------- 2 Arg
//   if (isNormDig(from) && isNormDig(to) && !isNormDig(step)) {
//     if (from < to) {
//       for (let i = from; i < to; i++) {
//         res.push(i)
//       }
//     } else {
//       for (let i = from; i > to; i--) {
//         res.push(i)
//       }
//     }
//   }
//   // - 3 Arg
//   if (isNormDig(from) && isNormDig(to) && isNormDig(step)) {
//     const dirSign = from < to
//     const stepSign = step > 0
//
//     if (step === 0) {
//       return []
//     }
//
//     if (dirSign !== stepSign) {
//       return []
//     } else {
//       if (from < to) {
//         for (let i = from; i < to; i = i + step) {
//           res.push(i)
//         }
//       } else {
//         for (let i = from; i > to; i = i + step) {
//           res.push(i)
//         }
//       }
//     }
//
//   }
//
//
//   return res
// }
//
// function isInt(arg?: number) {
//   return Number.isInteger(arg)
// }
//
// function isNormDig(arg?: number) {
//   return (arg !== undefined && arg !== null && !Number.isNaN(arg) && Number.isFinite(arg))
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// if (!Number.isFinite(from) || !Number.isFinite(to) || !Number.isFinite(step)) {
//   return []
// }
////////---------------- 1 Arg
//   if ((to === undefined || to === null) && (step === undefined || step === null)) {
//     if (typeof from === 'bigint') {
//       const resBI: bigint[] = []
//       for (let i = 0n; i < from; i++) {
//         resBI.push(i)
//       }
//       return resBI
//     } else {
//       for (let i = 0; i < from; i++) {
//         res.push(i)
//       }
//     }
//
//   }
// ////////---------------- 2 Arg
//   if ((to !== undefined && to !== null) && (step === undefined || step === null)) {
//
//     if (typeof from === 'bigint' || typeof to === 'bigint') {
//       from = BigInt(from)
//       to = BigInt(to)
//       const resBI: bigint[] | number[] = []
//       if (from < to) {
//         for (let i = from; i < to; i++) {
//           resBI.push(i)
//         }
//       } else {
//         for (let i = from; i > to; i--) {
//           resBI.push(i)
//         }
//       }
//
//       return resBI
//
//     } else {
//       if (from == to) {
//         return [from]
//       }
//       if (from < to) {
//         for (let i = from; i < to; i++) {
//           res.push(i)
//         }
//       } else {
//         for (let i = from; i > to; i--) {
//           res.push(i)
//         }
//       }
//     }
//
//   }
// ////////---------------- 3 Arg
//   if ((to !== undefined && to !== null) && (step !== undefined && step !== null)) {
//     if (typeof from === 'bigint' || typeof to === 'bigint' || typeof step === 'bigint') {
//       const resBI: bigint[] | number[] = []
//       from = BigInt(from)
//       to = BigInt(to)
//       step = BigInt(step)
//
//       if ((from < to && step < 0) || (from > to && step > 0)) {
//         return resBI
//       }
//       if ((from < to && step > 0) || (from > to && step < 0)) {
//         if (from < to) {
//           for (let i = from; i < to; i = i + step) {
//             resBI.push(i)
//           }
//         } else {
//           for (let i = from; i > to; i = i + step) {
//             resBI.push(i)
//           }
//         }
//       }
//       if (step === 0 || step === 0n) {
//         step = from < to ? 1n : -1n
//
//
//         if (from < to) {
//           for (let i = from; i < to; i = i + step) {
//             resBI.push(i)
//           }
//         } else {
//           for (let i = from; i > to; i = i + step) {
//             resBI.push(i)
//           }
//         }
//       }
//
//       return resBI
//
//     } else {
//       if ((from < to && step < 0) || (from > to && step > 0)) {
//         return res
//       }
//       if ((from < to && step > 0) || (from > to && step < 0)) {
//         if (from < to) {
//           for (let i = from; i < to; i = i + step) {
//             res.push(i)
//           }
//         } else {
//           for (let i = from; i > to; i = i + step) {
//             res.push(i)
//           }
//         }
//       }
//       if (step === 0) {
//         step = from < to ? 1 : -1
//
//
//         if (from < to) {
//           for (let i = from; i < to; i = i + step) {
//             res.push(i)
//           }
//         } else {
//           for (let i = from; i > to; i = i + step) {
//             res.push(i)
//           }
//         }
//
//
//       }
//     }
//
//   }
//
//   return res


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
