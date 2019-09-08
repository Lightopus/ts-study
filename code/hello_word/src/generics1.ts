// 泛型类 和泛型约束
/*
1. 泛型不能用于 类的静态 成员 

*/
// 定义 泛型类 约束了类的所有成员
class Woman<T> {
//  static run(value: T) { // 静态成员 不能引用参数
 run(value: T) {
    console.log(value)
    return value
    // return [1,2]
  }
}
let woman1  = new Woman<number>() // 指定类型参数
let woman2 = new Woman() // 没有指定类型参数 value的值可以是任何类型
console.log("woman2.run('1')")
console.log("woman2.run(1)",woman2.run(1))
console.log("woman2.run({id:1, name:'a'}):",woman2.run({id:1, name:'a'}))

console.log("woman1.run(1):",woman1.run(1))

// 泛型约束  就是对泛型变量做 接口约束
interface length {
  length: number;
}
function man<T extends length>(value: T): T {
  console.log(value, value.length);
  return value;
}
console.log("man([1]) man('123') man({length: 1}):",man([1]))
console.log("man([1]) man('123') man({length: 1}):",man('123'))
console.log("man([1]) man('123') man({length: 1}):",man({length: 1}))

