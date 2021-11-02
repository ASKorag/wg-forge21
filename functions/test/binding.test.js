const funcUtil = require('../dist/binding.js')

const user = {
  name: 'Andrey'
}

const person = {
  getName() {
    return this.name
  }
}

const age = 26
const sex = 'male'

function showInfo(age, sex) {
  return `Name: ${this.name}, age: ${age}, sex: ${sex}`
}

// test('Check apply method', () => {
//   expect(funcUtil.apply(showInfo, user, [age, sex])).toBe(showInfo.apply(user, [age, sex]))
// })

test('Check call method', () => {
  expect(funcUtil.call(showInfo, user, age, sex)).toBe(showInfo.call(user, age, sex))
  expect(funcUtil.call(person.getName, user)).toBe(person.getName.call(user))
})

// test('Check bind method', () => {
//   expect(funcUtil.bind(showInfo, user, age, sex)()).toBe(showInfo.bind(user, age, sex)())
//   expect(funcUtil.bind(showInfo, user, age)(sex)).toBe(showInfo.bind(user, age)(sex))
//   expect(funcUtil.bind(showInfo, user)(age, sex)).toBe(showInfo.bind(user)(age, sex))
// })