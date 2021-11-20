module.exports = class LinkedList {
  #head: TNode | null = null
  #tail: TNode | null = null
  #size = 0

  static validate(pos: number, size: number, methodType: 'get' | 'add' | 'remove') {
    if (methodType === 'remove' && size === 0) {
      throw new Error('The list is empty')
    }
    if (pos < 0 ||
      methodType === 'add' && pos > size ||
      methodType !== 'add' && pos > size - 1) {
      throw new RangeError('Incorrect position')
    }
  }

  static getNode(pos: number, head: TNode): TNode {  //get node of the list without validation
    let curNode = head
    for (let i = 0; i < pos; i++) {
      curNode = curNode!.next
    }
    return curNode!
  }

  #append(value: TValue) {  //add at the end of the list without validation
    const newNode = new LinkedListNode(value)
    if (this.#size === 0) {
      this.#tail = this.#head = newNode
    } else {
      this.#tail = this.#tail!.next = newNode //add a new node to the tail and move the tail to the new node
    }
  }

  get(pos: number) {
    pos = +pos
    LinkedList.validate(pos, this.#size, 'get')
    return LinkedList.getNode(pos, this.#head)
  }

  remove(pos: number) {
    pos = +pos
    LinkedList.validate(pos, this.#size, 'remove')

    const deletedNode = LinkedList.getNode(pos, this.#head)
    if (deletedNode === this.#tail) { //usual remove of the last node
      const prevNode = LinkedList.getNode(pos - 1, this.#head)
      prevNode.next = null
      this.#tail = prevNode
    } else {  //clever remove by copying a node
      const tempNode = deletedNode.next
      deletedNode.value = tempNode!.value
      deletedNode.next = tempNode!.next
    }
    this.#size--
  }

  add(item: TValue, pos?: number) {
    if (pos === undefined) {
      this.#append(item)
    } else {
      pos = +pos
      LinkedList.validate(pos, this.#size, 'add')

      if (pos === 0) {
        const newNode = new LinkedListNode(item, this.#head!)
        this.#head = newNode
      } else if (pos === this.#size) {  //add at the end of the list
        this.#append(item)
      } else {
        const prevNode = LinkedList.getNode(pos - 1, this.#head)
        const newNode = new LinkedListNode(item, prevNode.next!)
        prevNode.next = newNode
      }
    }
    this.#size++
  }

  [Symbol.iterator]() {
    let curNode = this.#head
    return {
      next() {
        if (curNode === null) {
          return {done: true}
        } else {
          const tempValue = curNode.value //save value before iteration
          curNode = curNode.next
          return {value: tempValue, done: false}
        }
      }
    }
  }
}

class LinkedListNode implements TNode {
  constructor(value: TValue, next: TNode | null = null) {
    this.value = value
    this.next = next
  }
}

type TValue = string | number

type TNode = {
  value: TValue,
  next: TNode | null
}
