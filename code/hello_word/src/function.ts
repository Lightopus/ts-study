// 定义函数的方式 有四种 
/*
1.function  
1.1 明确指出函数参数的类型
1.2 函数的返回值,可以通过函数的类型推断 
*/
function nohas(x: number, y: number) {
  return x + y
}
/*
2.通过变量 来定义函数的类型
2.1 
*/
let has: (x: number, y: number) => number
/*
3.类型别名 来定义函数的类型
3.1 
*/
type has1 = (x: number ,y: number) => number
/*
4.接口 来定义函数的类型
4.1 
*/
interface has2 {
  (x: number, y: number):number
}

// nohas(1,2,3)
// nohas(1)
nohas(1,2) // 不报错

function nohas1 (x: number, y?: number) {
  return y? x+y : x;
}
nohas1(1)
function nohas2 (x: number, y = 0, z: number, q = 1) {
  return x + y + z + q;
}
console.log("nohas2(1, undefined, 3, 2):",nohas2(1, undefined, 3, 2))
console.log("nohas2(1, 3, 2):",nohas2(1, 3, 2))
console.log("nohas2(1, undefined, 3):",nohas2(1, undefined, 3))
// 以上参数的个数的固定的,



// 当参数的个数不确定的时候,就使用  剩余参数
function nohas3 (x: number, ...rest: number[]) {
  // 使用数组 reduce()方式 求和
  return x + rest.reduce((pre, cur) => pre + cur)
}
console.log("nohas3(1,2,3,4,5,6):",nohas3(1,2,3,4,5,6));
/*注意:
    1. 通过变量 类型别名 接口 来定义函数类型 没有具体实现
    在真正调用的时候,需要书写函数体;
    2. ts中对函数参数的要求 形参和实参 必须是一一对应的 少一个不行,多一个也是不行的;
    3. 可选参数必须位于必选参数之后;
    4. 必选参数之后的默认值,是可以不传的
*/

// 函数重载 与es中的函数有出入, 静态类型语言中 C C++ C# java 都是函数的重载的概念
/*
函数重载: 
  两个函数,如果函数的名称相同,但是参数的个数 或则 参数的类型不同 ,那么就是实现了 函数的重载;
  作用: 不需要相识功能的函数,选用不同的函数名称,增强的函数的可读性;
*/
/*ts中的函数重载:
  例如: 函数支持多个参数,如果都是数字,那么就返回所有数字的和,如果都是字符串,就返回所有字符串的拼接
  ts中 函数重载,需要我们定义一系列列的 同名函数声明;
*/
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]):any {
  let first = rest[0]
  if(typeof first === 'string') {
    return rest.join('')
  }
  if(typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}
console.log("add8(1,2,3):",add8(1,2,3))
console.log("add8('a','b','c'):",add8('a','b','c'))



