module.exports = {
  bind(func, context) {
    this._validateFunc(func)
    var args = this._getArgs(arguments, 2)
    var savedThis = this
    return function () {
      var restArgs = savedThis._getArgs(arguments)
      return savedThis.apply(func, context, args.concat(restArgs))
    }
  },

  call(func, context) {
    var args = this._getArgs(arguments, 2)
    return this.apply(func, context, args)
  },

  apply(func, context, args) {
    this._validateFunc(func)
    var argsStr = this._getArgsStr(args, 'args')
    if (typeof context === 'object' && context !== null) {
      var uuid = this._getUUID()
      context[uuid] = func
      var result = eval('context[uuid](' + argsStr + ')')
      delete context[uuid]
    } else {
      var result = eval('func(' + argsStr + ')')
    }
    return result
  },

  _getArgsStr(args: any[], name: string): string {
    if (args === undefined) {
      args = []
    }
    var result = []
    for (var i = 0; i < args.length; i++) {
      result.push(name + '[' + i + ']')
    }
    return result.join(',')
  },

  _getArgs(args: IArguments, start?: number): any[] {
    if (start === undefined) {
      start = 0
    }
    var argsArr = []
    for (var i = start; i < args.length; i++) {
      argsArr.push(args[i])
    }
    return argsArr
  },

  _getUUID() {
    return Math.random().toString(36).substr(2, 10)
  },

  _validateFunc(func) {
    if (typeof func !== 'function') {
      throw new TypeError('The first argument must be a function')
    }
  }
}
