module.exports = class LinkedList {
  #head: TNode | null = null
  #tail: TNode | null = null
  #size = 0

  validate(pos: number, methodType: 'get' | 'add' | 'remove') {
    if (methodType === 'remove' && this.#size === 0) {
      throw new Error('The list is empty')
    }
    if (pos < 0) {
      throw new Error('Incorrect position')
    }
    if ((methodType === 'add' && pos > this.#size) || (methodType === 'get' && pos > this.#size - 1) || (methodType === 'remove' && pos > this.#size - 1)) {
      throw new Error('Incorrect position')
    }
  }

  getNode(pos: number): TNode | undefined {
    let currentNode = this.#head
    for (let i = 0; i < pos; i++) {
      if (currentNode === null) {
        return undefined
      }
      currentNode = currentNode!.next
    }
    return currentNode!
  }

  get(pos: number) {
    pos = +pos
    this.validate(pos, 'get')
    return this.getNode(pos)
  }

  remove(pos: number) {
    pos = +pos
    this.validate(pos, 'remove')

    if (pos === 0) {
      this.#head = this.#head!.next
      this.#size--
    } else {
      const prev = this.getNode(pos - 1)
      const deletedNode = prev!.next

      if (deletedNode === this.#tail) {
        prev!.next = null
        this.#tail = prev!
        this.#size--
      } else {
        prev!.next = deletedNode!.next
        this.#size--
      }
    }
  }

  add(item: any, pos?: number) {
    if (pos !== undefined) {
      pos = +pos
    }

    if (pos === undefined) {
      if (this.#size === 0) {
        this.#head = {
          value: item,
          next: null
        }
        this.#tail = this.#head
        this.#size++
      } else {
        this.#tail!.next = {
          value: item,
          next: null
        }
        this.#tail = this.#tail!.next
        this.#size++
      }
    } else {
      if (pos < 0 || pos > this.#size) {
        throw new Error('Incorrect position')
      }
      if (pos === 0) {
        const newNode = {
          value: item,
          next: this.#head
        }
        this.#head = newNode
        this.#size++
      } else {
        let node = this.#head
        let prev = null
        for (let i = 0; i < pos; i++) {
          prev = node
          node = node!.next
        }
        const newNode = {
          value: item,
          next: node
        }
        prev!.next = newNode
        this.#size++
      }


    }
  }

  [Symbol.iterator]() {
    const firstNode = this.#head
    return {
      currentNode: firstNode,
      next() {
        if (this.currentNode === null) {
          return {done: true}
        } else {
          const save = this.currentNode
          this.currentNode = this.currentNode.next
          return {value: save.value, done: false}
        }
      }
    }
  }

}

class LinkedListNode implements TNode {
  next: LinkedListNode | null = null

  constructor(public value: string | number, nextNode?: LinkedListNode) {
    this.value = value
    this.next = nextNode instanceof LinkedListNode ? nextNode : null
  }
}

type TNode = {
  value: string | number,
  next: TNode | null
}
