module.exports = {
  bind(func: TFunc, context: any) {
    var args = this._getArgs(arguments, 2)
    var savedThis = this
    if (context !== null) {
      var uuid = this._getUUID()
      context[uuid] = func
    }
    return function () {
      var extraArgs = savedThis._getArgs(arguments)
      return savedThis.apply(func, context, args.concat(extraArgs))
    }
  },

  call(func: TFunc, context: any) {
    var args = this._getArgs(arguments, 2)
    return this.apply(func, context, args)
  },

  apply(func: TFunc, context: any, args: any[]) {
    if (args === undefined) {
      args = []
    }
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
  }
}


type TFunc = (...args: any[]) => any