const range = require('../dist/range')

test('Run without arguments', () => {
    expect(() => {
        range()
    }).toThrow(new Error('Must be 1 or more arguments'))
})

/*test('Run with incorrect arguments', () => {
    expect(() => {
        range('7u')
    }).toThrow(new Error('Arguments must be number'))
})*/

test('Run with 1 positive arguments', () => {
    expect(range(0)).toEqual([])
    expect(range(2)).toEqual([0, 1])
    expect(range(5)).toEqual([0, 1, 2, 3, 4])
})

test('Run with 1 negative arguments', () => {
    expect(() => {
        range(-2)
    }).toThrow(new Error('Length must be more than 0'))
    expect(() => {
        range(-10)
    }).toThrow(new Error('Length must be more than 0'))
})

test('Run with 2 arguments, forward direction', () => {
    expect(range(10, 16)).toEqual([10, 11, 12, 13, 14, 15])
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4])
    expect(range(-3, 2)).toEqual([-3, -2, -1, 0, 1])
    expect(range(-10, -7)).toEqual([-10, -9, -8])
})

test('Run with 2 arguments, reverse direction', () => {
    expect(range(16, 10)).toEqual([16, 15, 14, 13, 12, 11])
    expect(range(5, 0)).toEqual([5, 4, 3, 2, 1])
    expect(range(2, -3)).toEqual([2, 1, 0, -1, -2])
    expect(range(-7, -10)).toEqual([-7, -8, -9])
})

test('Run with 3 arguments, forward direction', () => {
    expect(range(10, 16, 1)).toEqual([10, 11, 12, 13, 14, 15])
    expect(range(0, 5, 2)).toEqual([0, 2, 4])
    expect(range(-3, 2, 1)).toEqual([-3, -2, -1, 0, 1])
    expect(range(-20, -7, 3)).toEqual([-20, -17, -14, -11, -8])
})

test('Run with 3 arguments, reverse direction', () => {
    expect(range(16, 10, -1)).toEqual([16, 15, 14, 13, 12, 11])
    expect(range(5, 0, -2)).toEqual([5, 3, 1])
    expect(range(2, -3, -1)).toEqual([2, 1, 0, -1, -2])
    expect(range(-7, -20, -3)).toEqual([-7, -10, -13, -16, -19])
})


