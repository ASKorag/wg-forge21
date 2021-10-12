const mainDiv = document.querySelector('#div') as Element

console.log('Iterative BFS Traverse =>', iterBfsTraverse(mainDiv))
console.log('Iterative Pre-Order Traverse =>', iterPreOrderTraverse(mainDiv))
console.log('Recursive Pre-Order Traverse =>', recPreOrderTraverse(mainDiv))

function iterBfsTraverse(tree: Element): Array<Element> {
  const res = []
  const queue = [tree]
  let index = 0
  while (index < queue.length) {
    const elem = queue[index]
    res.push(elem)
    index++
    let child = elem.firstElementChild
    while (child) {
      queue.push(child)
      child = child.nextElementSibling
    }

  }
  return res
}

function iterPreOrderTraverse(tree: Element): Array<Element> {
  const res = []
  const stack = [tree]
  while (stack.length) {
    const elem = stack.pop() as Element
    res.push(elem)
    const children = getChildren(elem)
    while (children.length) {
      stack.push(children.pop() as Element)
    }
  }
  return res
}

function recPreOrderTraverse(elem: Element): Array<Element> {
  const res = [] as Array<Element>

  function rec(elem: Element): void {
    if (elem) {
      res.push(elem)
      getChildren(elem).forEach(e => rec(e))
    }
  }

  rec(elem)

  return res
}

function getChildren(elem: Element): Array<Element> {
  let child = elem.firstElementChild
  const children = []
  while (child) {
    children.push(child)
    child = child.nextElementSibling
  }
  return children
}
