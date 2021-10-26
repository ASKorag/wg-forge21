const crypt = require('../dist/crypt.js')

test('Run with incorrect amount of arguments', () => {
  expect(() => {
    crypt.encode()
  }).toThrow(new Error('Must be 2 arguments'))
  expect(() => {
    crypt.decode()
  }).toThrow(new Error('Must be 2 arguments'))
  expect(() => {
    crypt.encode('156')
  }).toThrow(new Error('Must be 2 arguments'))
  expect(() => {
    crypt.decode('456')
  }).toThrow(new Error('Must be 2 arguments'))
  expect(() => {
    crypt.encode(undefined, 'abcdefghjk')
  }).toThrow(new Error('Must be 2 arguments'))
  expect(() => {
    crypt.decode(undefined, '0123456789')
  }).toThrow(new Error('Must be 2 arguments'))
})

test('Run with incorrect length of key', () => {
  expect(() => {
    crypt.encode('489', '4')
  }).toThrow(new Error('Length of key must be 10 symbols'))
  expect(() => {
    crypt.encode('489', '')
  }).toThrow(new Error('Length of key must be 10 symbols'))
  expect(() => {
    crypt.encode('489', '4986189')
  }).toThrow(new Error('Length of key must be 10 symbols'))
  expect(() => {
    crypt.encode('489', '498649816516846189')
  }).toThrow(new Error('Length of key must be 10 symbols'))
  expect(() => {
    crypt.decode('489', '4')
  }).toThrow(new Error('Length of key must be 10 symbols'))
  expect(() => {
    crypt.decode('489', '')
  }).toThrow(new Error('Length of key must be 10 symbols'))
  expect(() => {
    crypt.decode('489', '4986189')
  }).toThrow(new Error('Length of key must be 10 symbols'))
  expect(() => {
    crypt.decode('489', '498649816516846189')
  }).toThrow(new Error('Length of key must be 10 symbols'))
})

test('Run with incorrect symbols on key', () => {
  expect(() => {
    crypt.encode('45', '123456789_')
  }).toThrow(new Error('Key must be include only latin symbols or digital'))
  expect(() => {
    crypt.encode('45', '123456789ф')
  }).toThrow(new Error('Key must be include only latin symbols or digital'))
  expect(() => {
    crypt.encode('45', '123456789#')
  }).toThrow(new Error('Key must be include only latin symbols or digital'))
  expect(() => {
    crypt.decode('45', '123456789_')
  }).toThrow(new Error('Key must be include only latin symbols or digital'))
  expect(() => {
    crypt.decode('45', '123456789ф')
  }).toThrow(new Error('Key must be include only latin symbols or digital'))
  expect(() => {
    crypt.decode('45', '123456789#')
  }).toThrow(new Error('Key must be include only latin symbols or digital'))
})

test('Run with repeated symbols on key', () => {
  expect(() => {
    crypt.encode('123', '0000111198')
  }).toThrow(new Error('Key symbols must not be repeated'))
  expect(() => {
    crypt.encode('123', '0112345678')
  }).toThrow(new Error('Key symbols must not be repeated'))
})

test('Run encode with incorrect symbols on pin', () => {
  expect(() => {
    crypt.encode('a', '0123456789')
  }).toThrow(new Error('Pin must be include only digital'))
  expect(() => {
    crypt.encode('ф', '0123456789')
  }).toThrow(new Error('Pin must be include only digital'))
})

test('Run decode with invalid key', () => {
  expect(() => {
    crypt.decode('JKJdC', 'OMGJSR0CKZ')
  }).toThrow(new Error('Invalid key'))
})

test('Test encode', () => {
  expect(crypt.encode('31337', 'OMGJSR0CKZ')).toBe('JMJJC')
  expect(crypt.encode(31337, 'OMGJSR0CKZ')).toBe('JMJJC')
})

test('Test decode', () => {
  expect(crypt.decode('JMJJC', 'OMGJSR0CKZ')).toBe('31337')
})

test('Test both methods', () => {
  const pin = '1654861646153498498489146515615289437947973292597249721975735972792479589783579429727952'
  const key = 'aBcD065WG3'
  const enc = crypt.encode(pin, key)
  expect(crypt.encode(pin, key)).toBe(enc)
  expect(crypt.decode(enc, key)).toBe(pin)
})