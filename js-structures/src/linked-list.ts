module.exports = class LinkedList {
  #head: TNode | null = null
  #tail: TNode | null = null
  #size = 0

  add(item: any, pos ?: number) {
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
