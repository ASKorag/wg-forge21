const mainDiv = document.querySelector('#div') as Element

function iterBfsTraverse(tree: Element): Array<Element> {
  const res = []
  const queue = [tree]
  let index = 0
  while (index < queue.length) {
    const elem = queue[index]
    res.push(elem)
    index++
    let newElem = elem.firstElementChild
    while (newElem) {
      queue.push(newElem)
      newElem = newElem.nextElementSibling
    }
  }
  return res
}

console.log('Iterative BFS Traverse =>', iterBfsTraverse(mainDiv))
