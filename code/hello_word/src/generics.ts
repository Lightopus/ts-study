// ts 泛型 
/*
概念: 不预先确定的数据类型 具体的类型在使用的时候 才能确定

*/
// 泛型函数
function log<T>(value: T): T {
  console.log(value);
  return value;
}
// 调用方式
//1. 调用的时候,直接指明 T的类型
log<string[]>(['a','b'])
// 2. 利用ts的 类型推断,省略类型的参数,直接传入一个数组
log(['a','b'])
// 注意: 我们不仅可以利用 泛型 定义一个函数 也可以定义一个函数的类型;
// 使用类型别名 定义一个 泛型函数 类型 
//  type Log = <T>(value: T) => T
//  let myLog : Log = log

 // 泛型接口 
//  interface Log {
//    <T>(value: T): T
//  }
//  给 泛型变量 添加默认类型
//  interface Log<T = string> {
//   (value: T): T
// }
// 在实现泛型接口的时候必须 指定一个类型
 interface Log<T> {
  (value: T): T
}
// 注意: 在泛型变量 约束了 整个接口(整个接口成员) 
// 在实现泛型接口的时候必须 指定一个类型,或者 给 泛型变量 添加默认类型
// let MyLog: Log = log 
let MyLog: Log<number> = log 
MyLog(1)