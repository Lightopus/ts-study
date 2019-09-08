// 1. 原始类型
let bool: boolean = true
let num: number | null | undefined = 123
let str: string = 'abc'
// 2. 数组
let arr1:number[] = [1,2,3]
let arr2:Array<number> = [77,88,99]
let arr3:Array<string> = ['77','88','99']
let arr4:Array<string | number> = [77,'88','99',1]
// 3. 元组 默认是2个元素
let tuple: [number,string] = [0,'1']
tuple.push(2)
// console.log(tuple) 可以push给元祖类型添加元素
// console.log(tuple[2]) 报错,不能越界访问,实际开发中,不建议这么做
// 4. 函数
let add = (x: number,y:number):number => x + y 
let compute: (x: number, y: number) => number 
compute = (a, b) => a + b
// let add = (x,y) => x + y 
//  5. 对象
// let obj: object = {x: 1, y: 2} obj.x = 3 
let obj: {x: number ,y:number} = {x: 1, y: 2}
obj.x = 3
// 6. symbol symbol类型就是 具有唯一的值的类型
let s1: symbol = Symbol()
let s2 = Symbol()
console.log("s2 == s1",s2 == s1) // false

// 7. undefined null
let un: undefined = undefined
let nu: null = null
// ts中 null 和undefined 是任何类型的子集 将null或undefined赋值给其他类型有2种方法;
num = undefined
num = null

// 8. void  在js中void类型是一直操作符,可以让任何表达式返回0; 
// 返回undefined最快捷的方式就是void(0)
// undefined在js中不是保留字 可以自定义undefined不变量 覆盖全局的undefined
let noReturn = () => {}
// 一个函数没有任何返回值,那么他的类型就是void类型
// 9.any 在ts中没有指定它的类型,那么他的类型就是 any类型 与js无区别
let x 
x = 1
x = []
x = () =>{

}
// 10. never类型 永远不会有返回值的类型,1.一个函数抛出了错误,2.函数的死循环 他们的类型就是never类型
let error = () => {
  throw new Error('error')
}
let endless = () => {
  while(true) {}
}
// 11. 枚举类型: 分为1.数字枚举 和 2.字符串类型
// 枚举: 一组 有名字的 常量集合 例如通讯录 这个通讯录枚举包含了 人名 电话号码 
// function initByRole(role) {
//   if(role == 1 || role == 2) {
//     // do width
//   } else if (role == 3 || role == 4){
//     // do width
//   } else if (role == 5) {
//     // do width
//   } else {
//     // do sth
//   }
// }
// 以上代码的问题:
// 1.可读性差: 很难记住数字的含义
// 2.可维护性差: 硬编码,牵一发动全身

// 数字枚举 (枚举的原理:就是反向映射:
/*1.枚举成员的名称作为了key,枚举成员的值被作为了value,内部的这个表达式也直接返回了value
2. 内部表达式的值value 又被作为了key  成员的名称又被作为了value;
3. 枚举在运行环境下被编译成了对象,而且多了写其他成员,既可以用枚举成员的 名称 索引,也可以用枚举成员的 值 索引;
)
*/

//)
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log("Role.Reporter:",Role.Reporter)
console.log("Role:",Role)

// 字符串枚举 (不能反向映射)
/*
1.只有枚举成员的名称作为了key 
2.只有枚举成员的值被作为了value
*/
enum Message {
  Success = "恭喜你,成功了",
  Fail = "抱歉,你败了"
}

// 异构枚举 (字串串枚举和数字枚举混用,不建议使用)
enum Anwser {
  N,
  Y = 'Yes'
}
// 枚举成员的值
// Role.Reporter = 2 
// 枚举成员的值是一个只读类型,不能修改

// 枚举成员的分类: 
/*1.常量枚举(const声明的枚举 const enum ) 
  1.1 没有初始值
  1.2 对已有成员的引用
  1.3 常量的表达式
  特点: 1.枚举成员的值不会保留在编译阶段,会被计算,会被移除;
  作用: 1.当我们不需要对象,而是需要对象的值时候,使用常量枚举,减少编译阶段的代码;

*/
// 2. 需要被计算的枚举成员( computed enum )(非常量的表达式)
/*
特点:1.枚举成员的值,保留在编译阶段,不计算.程序的执行阶段/运行时阶段 才会计算;
     2.后面的常量枚举成员必须有初始值;
*/
enum Char {
  // const 
  a, // 没有初始值
  b = Char.a, // 对现有枚举成员的引用
  c = 1 + 3, // 常量表达式
  // computed
  d = Math.random(),
  e = '123'.length
}

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar
}

 let month = [Month.Jan, Month.Feb, Month.Mar] // 编译阶段,被编译成了常量;

 // 枚举类型
 // 不要用等于号,
// enum E = {a, b}
// enum F = {a = 0, b = 1}
// enum G = {a = 'apple', b = 'banana'}
enum E {a, b} // 所有成员没有初始值的枚举
enum F {a = 0, b = 1} // 所有成员都是数字枚举
enum G {a = 'apple', b = 'banana'} // 所有成员都是字符串枚举
//  定义了两个枚举类型 e 和 f ,e继承于 E枚举 f继承于 F枚举
//可以将任何number类型的值 赋值给 e 和 f 枚举  取值也可以超出 枚举成员的定义
// 不同类型的枚举,不可以相互比较 
let e: E = 3
let f: F = 3
// e == f 报错
// 定义了三种枚举成员类型 e1 e2 e3,(e1继承于E.a e2继承于 E.b e3继承于 E.a)
let e1: E.a = 1
let e2: E.b
let e3: E.a = 1
// e1 == e2 报错,不可以相互比较 
// e1 === e3 (可以进行比较,在有初始值的时候)
// 定义了 两种 枚举类型,一种是枚举类型 一种是枚举成员的类型
// 枚举类型g1 继承于 字符串枚举 G
// 枚举成员类型 g2 继承于字符串成员类型 G.a 
// 字符串枚举,它的取值只能是枚举成员的类型
let g1: G = G.a //获取G.b
let g2: G.a = G.a // 只能是G.a




