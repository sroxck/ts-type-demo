// 实现一个可选工具参数 作用是将一个对象类型中的部分参数变成可选参数
// 1. 首先需要将 可选的部分剔除 拿到 必填的部分 使用Omit 得到 title,conten
// 2. 使用pick挑选出 需要变成可选的参数 data和index,使用partial 变成可选 
// 3. 合并结果 Omit结果是{title:string,conteng:string} Partial:{data?:Date,index?:number} 使用 &合并为 {title:string,conteng:string,data?:Date,index?:number}

type article = {
  title: string,
  content: string,
  data: Date,
  index: number
}
type articleOpt = operator<article, 'data' | 'index'>
type articleAny = articleOpt & {[key:string]:any}
type operator<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
function createArticle(obj: articleAny) {
  return obj
}
createArticle({
  title: 'string',
  content: 'string',
  任意属性:'都是可以的,因为使用了 articleAny 添加了索引签名'
})
