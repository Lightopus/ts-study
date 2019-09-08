// 对象类型的接口
interface List {
  readonly id: number;
  name: string;
  // [x: string]: any; 
  // 字符串索引签名语法,含义:用任意的字符串去索引List 得到任意的结果,list就可以支持多个属性;
  age?: number; // 可选属性,可以有,也可以没有 这样调用render(result)
}
interface Result {
  data: List[]
}
function render(result: Result) {
  result.data.forEach((value)=>{
    console.log("render:",value.id,value.name);
    if(value.age){
      console.log(value.age)
    }
    // value.id++ 只读属性 不能被修改 
  })
}
// 假设后端接受过来的数据是result
let result = {
  data: [
    {id: 1, name: "A"},
    // 只要后台数据满足传入的必要条件即可,是允许的,即是传入的多余的字段,也能通过类型检查
    {id: 1, name: "A", sex: 'male'}, 
    {id: 2, name: 'B', age: 10}
  ]
}
// 调用render()函数, 直接传入字面量对象,不能绕过 类型检查
// render({
//   data: [
//     {id: 1, name: "A"},
//     {id: 1, name: "A", sex: 'male'}, 
//     {id: 2, name: 'B'}
//   ]
// })
// 调用render(),避免类型检查的3种方法:
// 1.将后台获取的数据,存入一个变量,调用render()函数,直接传入这个变量
render(result)
// 2. 类型断言 告诉编译器,我知道这个对象的类型是 Result 让编译器不要类型检查;
// 2.1
// render({
//   data: [
//     {id: 1, name: "A"},
//     {id: 1, name: "A", sex: 'male'}, 
//     {id: 2, name: 'B'}
//   ]
// } as Result)
// 2.2 不建议使用,在react中有歧义;
// render(<Result> {
//   data: [
//     {id: 1, name: "A"},
//     {id: 1, name: "A", sex: 'male'}, 
//     {id: 2, name: 'B'}
//   ]
// })
// 3. 字符串索引签名  [x: string]: any; 
// 字符串索引签名语法,含义:用任意的字符串去索引List 得到任意的结果,list就可以支持多个属性;


// 以上属性的个数是固定,确定的,当你不确定一个接口中有多少个属性的时候, 就是可以使用 可索引类型的接口
// 可索引类型的接口,可以用 数字去 索引 也可以用 字符串 去索引
// 定义用数字索引的接口 
interface StringArray {
  [index: number]: string; 
  // 签名 含义是:用任意的number类型取索引StringArray 都会得到 字符串类型
  // 相当于声明了一个字符串类型的数组;
}
let chars: StringArray = ['a', 'b', '8']
// 定义用字符串索引的接口
// 两种索引签名可以混用的
// 注意: 数字索引签名的返回值,一定要是 字符串索引签名的返回值的 子类型
interface Names {
  [x: string]: string; 
  // 签名 含义: 用任意的字符串去索引  Names 得到的结果 都是 string 类型
  // 不能声明number类型的成员了 ,两种索引签名可以混用的
  // y: number; // 报错
  [z: number]: string;
  // [z: number]: any; // 不报错
  // [z: number]: number; // 报错
  // string类型是   字符串索引签名的返回值(any类型 或 string类型)的 子类型


}