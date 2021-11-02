module.exports = {
  // bind(func: Func, context: any) {
  //   const args: any[] = []
  //   for (var i = 2; i < arguments.length; i++) {
  //     args.push(arguments[i])
  //   }
  //   var uuid = Date.now()
  //   context[uuid] = func
  //   return function () {
  //     const rest = []
  //     for (var i = 0; i < arguments.length; i++) {
  //       rest.push(arguments[i])
  //     }
  //     var result = context[uuid](...args, ...rest)
  //     delete context[uuid]
  //     return result
  //   }
  // },

  call(func: Func, context: any) {
    const args = []
    for (var i = 2; i < arguments.length; i++) {
      args.push(arguments[i])
    }

    var _args = []
    for (var i = 0; i < args.length; i++) {
      _args.push('args[' + i + ']')
    }
    var uuid = Date.now()
    context[uuid] = func
    var result = eval(`context[uuid](` + _args.join(',') + `)`)
    delete context[uuid]
    return result
  }

  // apply(func: Func, context: any) {
  //   const args = arguments[2]
  //   var uuid = Date.now()
  //   context[uuid] = func
  //   var result = context[uuid](...args)
  //   delete context[uuid]
  //   return result
  // }
}


type Func = (...args: any[]) => any