module.exports = {
  bind(func: Func, context: any) {
    var args = this._getArgs(arguments, 2)
    var savedThis = this
    return function () {
      var extraArgs = savedThis._getArgs(arguments)
      return savedThis.apply(func, context, args.concat(extraArgs))
    }
  },

  call(func: Func, context: any) {
    var args = this._getArgs(arguments, 2)
    return this.apply(func, context, args)
  },

  apply(func: Func, context: any, args: any[]) {
    if (args === undefined) {
      args = []
    }
    var stringArgs = this._getArgsStr(args, 'args')
    if (typeof context === 'object' && context !== null) {
      var uuid = Date.now()
      context[uuid] = func
      var result = eval('context[uuid](' + stringArgs + ')')
      delete context[uuid]
    } else {
      var result = eval('func(' + stringArgs + ')')
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
  }
}


type Func = (...args: any[]) => any