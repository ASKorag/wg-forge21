const mainDiv = document.querySelector('#div') as Element

console.log('Iterative BFS Traverse =>', iterBfsTraverse(mainDiv))
console.log('Iterative Pre-Order Traverse =>', iterPreOrderTraverse(mainDiv))
console.log('Iterative Post-Order Traverse =>', iterPostOrderTraverse(mainDiv))
console.log('Recursive BFS Traverse =>', recBfsTraverse(mainDiv))
console.log('Recursive Pre-Order Traverse =>', recPreOrderTraverse(mainDiv))
console.log('Recursive Post-Order Traverse =>', recPostOrderTraverse(mainDiv))

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

function iterPostOrderTraverse(tree: Element): Array<Element> {
  let res = []
  const s1 = []
  const s2: Array<Element> = []

  s1.push(tree)

  while (s1.length) {
    const elem = s1.pop() as Element
    s2.push(elem)
    const children = getChildren(elem)
    s1.push(...children)
  }

  while (s2.length) {
    res.push(s2.pop() as Element)
  }

  return res
}

function recBfsTraverse(elem: Element): Array<Element> {
  const res = [] as Array<Element>
  const queue = [] as Array<Element>

  function rec(elem: Element) {
    if (elem) {
      res.push(elem)
      queue.push(...getChildren(elem))
      rec(queue.shift() as Element)
    }
  }

  rec(elem)
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

function recPostOrderTraverse(elem: Element): Array<Element> {
  const res = [] as Array<Element>

  function rec(elem: Element): void {
    if (elem) {
      getChildren(elem).forEach(e => rec(e))
      res.push(elem)
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
