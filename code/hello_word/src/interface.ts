// 变量定义 函数类型
let add0: (x: number, y: number) => number
// 接口定义 函数类型
interface Add0 {
  // 不需要定义函数名称 函数返回值用:
  (x: number, y: number): number
}
// 类型别名 定义 函数类型 类型别名就是type关键字 声明 ,给函数起了 个名字;
type Add1 = (x: number, y: number) => number

// 实现 具体的函数
let myAdd: Add1 = (a, b) => a + b
// 混合接口 定义 类库
interface Lib {
  (): void
  version: string
  doSometing(): void
}
// 缺点: 对全局暴露的 Lib变量 是一个单例
// 解决办法是: 函数封装;
// let lib: Lib = (() => {}) as Lib
//  // 类型断言,明确知道这个Lib是我们定义的接口类型
// lib.version = '1.0'
// lib.doSometing = () => {}
function getLib() {
  let lib: Lib = (() => {}) as Lib
  // 类型断言,明确知道这个Lib是我们定义的接口类型 Lib
  lib.version = '1.0'
  lib.doSometing = () => {}
  return lib;
}
let Lib1 = getLib();
Lib1();
Lib1.doSometing();
let lib2 = getLib(); // 创建了lib2实例

// 注意: 接口还可以定义 类结构 类的类型, 函数 对象;
