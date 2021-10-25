const range = require('../dist/range')

test('Run without arguments', () => {
    expect(range()).toEqual([])
})

test('Run with 1 argument only', () => {
    expect(range(0)).toEqual([])
    expect(range(5)).toEqual([0, 1, 2, 3, 4])
    expect(range(9)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8])
    expect(range(-5)).toEqual([])
    expect(range(-89)).toEqual([])
})

test('Run with 1 correct argument', () => {
    expect(range(-5, undefined)).toEqual([])
    expect(range(-5, null)).toEqual([])
    expect(range(-5, NaN)).toEqual([])
    expect(range(-5, Infinity)).toEqual([])
})

test('Run with 2 arguments only', () => {
    expect(range(1, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    expect(range(10, 15)).toEqual([10, 11, 12, 13, 14])
    expect(range(-5, 5)).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4])
    expect(range(-10, -5)).toEqual([-10, -9, -8, -7, -6])
    expect(range(-6, 1)).toEqual([-6, -5, -4, -3, -2, -1, 0])
    expect(range(9, 1)).toEqual([9, 8, 7, 6, 5, 4, 3, 2])
    expect(range(15, 10)).toEqual([15, 14, 13, 12, 11])
    expect(range(5, -5)).toEqual([5, 4, 3, 2, 1, 0, -1, -2, -3, -4])
    expect(range(-5, -10)).toEqual([-5, -6, -7, -8, -9])
    expect(range(1, -6)).toEqual([1, 0, -1, -2, -3, -4, -5])
})

test('Run with 2 correct arguments', () => {
    expect(range(1, 9, null)).toEqual([])
    expect(range(10, 15, undefined)).toEqual([])
    expect(range(-5, 5, NaN)).toEqual([])
    expect(range(-10, -5, Infinity)).toEqual([])
    expect(range(1, null, 1)).toEqual([])
    expect(range(10, undefined, 15)).toEqual([])
    expect(range(-5, NaN, 5)).toEqual([])
    expect(range(-10, Infinity, -5)).toEqual([])
})


// test('Run with 1 bigInt argument', () => {
//     expect(range(0n)).toEqual([])
//     expect(range(5n)).toEqual([0n, 1n, 2n, 3n, 4n])
//     expect(range(9n)).toEqual([0n, 1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n])
//     expect(range(-5n)).toEqual([])
//     expect(range(-89n)).toEqual([])
// })


test('Run with 3 arguments, correct step', () => {
    expect(range(5, 10, 1)).toEqual([5, 6, 7, 8, 9])
    expect(range(5, 10, 2)).toEqual([5, 7, 9])
    expect(range(-5, 5, 2)).toEqual([-5, -3, -1, 1, 3])
    expect(range(-10, -5, 3)).toEqual([-10, -7])
    expect(range(10, 5, -1)).toEqual([10, 9, 8, 7, 6])
    expect(range(10, 5, -2)).toEqual([10, 8, 6])
    expect(range(5, -5, -2)).toEqual([5, 3, 1, -1, -3])
    expect(range(-5, -10, -3)).toEqual([-5, -8])
})

test('Run with 3 arguments, incorrect step', () => {
    expect(range(5, 10, -1)).toEqual([])
    expect(range(5, 10, -2)).toEqual([])
    expect(range(-5, 5, -2)).toEqual([])
    expect(range(-10, -5, -3)).toEqual([])
    expect(range(10, 5, 1)).toEqual([])
    expect(range(10, 5, 2)).toEqual([])
    expect(range(5, -5, 2)).toEqual([])
    expect(range(-5, -10, 3)).toEqual([])
    expect(range(-5, -10, null)).toEqual([])
    expect(range(-5, -10, NaN)).toEqual([])
    expect(range(-5, -10, undefined)).toEqual([])
    expect(range(-5, -10, Infinity)).toEqual([])
    expect(range(-5, 2, Infinity)).toEqual([])

})

test('Run with 3 arguments, step is 0', () => {
    expect(range(5, 10, 0)).toEqual([])
    expect(range(5, 10, undefined)).toEqual([])

})



