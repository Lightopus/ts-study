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


