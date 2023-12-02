/**
 * infer 类型推断
 * demo1: 推断出函数的返回值是什么类型,写一个类型工具 用infer推断函数返回值类型
 */

type sum = (a: number, b: number) => number
type Return<T> = T extends (...args: any[]) => infer R ? R : T
let sumResult: Return<sum>;


// demo2 取出promise泛型中的类型
type PromiseType<T> = T extends Promise<infer K> ? K : T
// 递归
type PromiseTypeD<T> = T extends Promise<infer K> ? PromiseTypeD<K> : T
type pt = PromiseType<Promise<string>>

// demo3 返回函数的第一个参数的类型
type FirstArg<T> = T extends (first:infer K,...args:any[])=>any ? K :T 
type fa = FirstArg<(name:string,age:number)=>void>

// demo4 获取数组每一项的类型
type ArrayType<T> = T extends (infer I)[] ? I : T
const list = [1,2,324,23,5,'sf']
type ItemType = ArrayType<typeof list>


