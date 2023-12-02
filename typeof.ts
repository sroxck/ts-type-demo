/**
 * 类型关联的DEMO
 * 1. 通过将on的第一个参数和回调函数的参数关联,第一个参数的值类型,就是回调函数参数的类型
 * 2. 将on第一个参数与传递的对象关联,on的值只能是传递对象中的一个
 * typeof: 用于获取给定表达式的类型信息
 * 获取变量的类型信息:通过typeof获取变量的类型信息
 * const num = 42;
 * type NumType = typeof num; // 类型为 number
 * 
 */

type RunProxy<T> = {
  on<K extends string & keyof T>(
    name: `${K}Changed`,
    callback: (oldValue: T[K], newValue: T[K]) => void): void
}
declare function Run<T>(obj: T): RunProxy<T>

const RunProxy = Run({
  age: 12,
  name: '张三',
  sex: '男',
  sfL: 'ss'
})
RunProxy.on('ageChanged', (oldValue, newValue) => {
  // todo
})

