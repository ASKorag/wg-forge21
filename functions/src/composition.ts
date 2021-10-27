module.exports = (funcArr: Array<TFunc>): TBasic => arg => funcArr.reduce((res, func) => func(res), arg)

type TBasic = (arg: any) => any
type TFunc = (...args: any[]) => (arg: any) => any