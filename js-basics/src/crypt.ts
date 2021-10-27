class Crypt {
  encode(pin: string, key: string) {
    Crypt.#validateArgs('encode', pin, key)
    const enc: string[] = []
    for (let dig of String(pin)) {
      enc.push(key[+dig])
    }
    return enc.join('')
  }

  decode(enc: string, key: string) {
    Crypt.#validateArgs('decode', enc, key)
    const pin: number[] = []
    for (let char of enc) {
      pin.push(key.indexOf(char))
    }
    return pin.join('')
  }

  static #validateArgs(methodType: 'encode' | 'decode', str?: string, key?: string) {
    if (str === undefined || key === undefined) {
      throw new Error('Must be 2 arguments')
    }
    if (key.length !== 10) {
      throw new Error('Length of key must be 10 symbols')
    }
    const validKey = /^[a-zA-Z0-9]{10}$/
    if (!validKey.test(key)) {
      throw new Error('Key must be contain only latin symbols or numbers')
    }
    if (new Set(key).size !== key.length) {
      throw new Error('Key symbols must not be repeated')
    }
    if (methodType === 'encode') {
      const validPin = /^\d*$/
      if (!validPin.test(str)) {
        throw new Error('Pin must be contain only numbers')
      }
    }
    if (methodType === 'decode') {
      for (let char of str) {
        if (!key.includes(char)) {
          throw new Error('Invalid key')
        }
      }
    }
  }
}

module.exports = new Crypt()
