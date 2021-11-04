const funcUtil = require('../dist/binding.js')

const user = {
  name: 'Andrey'
}

const age = 26
const sex = 'male'

function showInfo(age, sex) {
  return `Name: ${this.name}, age: ${age}, sex: ${sex}`
}

test('Check apply method', () => {
  expect(funcUtil.apply(showInfo, user, [age, sex])).toBe(showInfo.apply(user, [age, sex]))
  expect(funcUtil.apply(showInfo, user)).toBe(showInfo.apply(user))
  expect(funcUtil.apply(showInfo, null)).toBe(showInfo.apply(null))
  expect(funcUtil.apply(showInfo, 'user')).toBe(showInfo.apply('user'))
  expect(funcUtil.apply(showInfo, 15)).toBe(showInfo.apply(15))
  expect(funcUtil.apply(showInfo, true)).toBe(showInfo.apply(true))
  expect(funcUtil.apply(showInfo, undefined)).toBe(showInfo.apply(undefined))
})

test('Check call method', () => {
  expect(funcUtil.call(showInfo, user, age, sex)).toBe(showInfo.call(user, age, sex))
  expect(funcUtil.call(showInfo, user)).toBe(showInfo.call(user))
  expect(funcUtil.call(showInfo, true)).toBe(showInfo.call(true))
  expect(funcUtil.call(showInfo, 'true')).toBe(showInfo.call('true'))
  expect(funcUtil.call(showInfo, 15)).toBe(showInfo.call(15))
  expect(funcUtil.call(showInfo, undefined)).toBe(showInfo.call(undefined))
  expect(funcUtil.call(showInfo, null)).toBe(showInfo.call(null))
})

test('Check bind method', () => {
  expect(funcUtil.bind(showInfo, user, age, sex)()).toBe(showInfo.bind(user, age, sex)())
  expect(funcUtil.bind(showInfo, null, age, sex)()).toBe(showInfo.bind(null, age, sex)())
  expect(funcUtil.bind(showInfo, user, age)(sex)).toBe(showInfo.bind(user, age)(sex))
  expect(funcUtil.bind(showInfo, null, age)(sex)).toBe(showInfo.bind(null, age)(sex))
  expect(funcUtil.bind(showInfo, user)(age, sex)).toBe(showInfo.bind(user)(age, sex))
  expect(funcUtil.bind(showInfo, null)(age, sex)).toBe(showInfo.bind(null)(age, sex))
})
