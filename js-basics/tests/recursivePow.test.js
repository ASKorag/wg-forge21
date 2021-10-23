const pow = require('../dist/recursivePow.js')

test('Run without arguments', () => {
    expect(() => {
        pow()
    }).toThrow(new Error('Must be 2 integer arguments'))
})

test('Run with 1 arguments', () => {
    expect(() => {
        pow(4)
        pow(undefined, 4)
    }).toThrow(new Error('Must be 2 integer arguments'))
})

test('Run with incorrect arguments types', () => {
    expect(() => {
        pow('7', '2')
        pow('7', 2)
        pow(7, '2')
        pow({}, 2)
    }).toThrow(new Error('Arguments must be integer'))
})

test('Run with 0 exp', () => {
    expect(pow(2, 0)).toBe(1)
    expect(pow(-2, 0)).toBe(1)
    expect(pow(0, 0)).toBe(1)
})

test('Run with 1 exp', () => {
    expect(pow(2, 1)).toBe(2)
    expect(pow(-2, 1)).toBe(-2)
    expect(pow(0, 1)).toBe(0)
})

test('Run with positive exp', () => {
    expect(pow(2, 6)).toBe(64)
    expect(pow(2, 9)).toBe(512)
    expect(pow(-2, 8)).toBe(256)
    expect(pow(-2, 7)).toBe(-128)
    expect(pow(0, 45)).toBe(0)
    expect(pow(0, 20)).toBe(0)
})

test('Run with negative exp', () => {
    expect(pow(2, -3)).toBe(Math.pow(2, -3))
    expect(pow(2, -1)).toBe(0.5)
    expect(pow(-2, -8)).toBe(Math.pow(-2, -8))
    expect(pow(-2, -7)).toBe(Math.pow(-2, -7))
    expect(pow(0, -45)).toBe(Infinity)
    expect(pow(0, -20)).toBe(Infinity)
})