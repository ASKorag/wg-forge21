const LinkedListClass = require('../dist/linked-list.js')

test('Test add method and iteration', () => {
  const list = new LinkedListClass()
  list.add(1)
  list.add(2)
  list.add(3)
  const result = []
  for (let i of list) {
    result.push(i)
  }
  expect(result).toEqual([1, 2, 3])
})

test('Test example from task description', () => {
  const list = new LinkedListClass()
  list.add(2)
  list.add(1)
  list.add(9)
  list.add(4)
  list.add(8, 3)
  list.remove(0)
  const result = []
  for (let i of list) {
    result.push(i)
  }
  expect(result).toEqual([1, 9, 8, 4])
})