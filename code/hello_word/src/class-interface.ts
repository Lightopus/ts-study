// 接口和类型的关系;
// 1.类类型接口 一个接口 可以约束 类成员的属性 以及他们的类型
// 接口
interface Human {
  // new (name: string): void; //  不能约束 类的 构造函数
  name: string;
  eat(): void;
}
// 类 实现接口(implements) 
/*
1. 类,必须实现 接口中的声明的 所有成员 类可以定义自己属性
2. 接口只能约束 类的 公有成员,不能约束 类的 构造函数
3. 
*/
class Asian implements Human {
  constructor(name: string) {
    this.name = name 
  }
  //  protected name: string;
  name: string;
  eat() {}
  sleep() {} // 类自己定义的 方法;
}

// 接口之间的 的继承 一个接口可以继承多个接口;
// 注意: 接口之间的继承,可以看出,可以抽离出重用的接口,也可以合并成一个接口
interface Man extends Human {
  run(): void;
}
interface Child {
  cry(): void;
}
interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}
// 接口继承类
// 相当于 接口把类的成员 抽象出来 ,只有类的成员结构 而没有具体的实现;
// 注意: 接口在抽离 类的成员结构 时候, 公有 私有成员 受保护成员 都会被抽离
// 类
class Auto {
  state = 1
  // c 不是Auto 的子类 不包含Auto 的非公有成员 
  //但是 AutoInterface接口  抽离 类的成员结构 时候, 公有 私有成员 受保护成员 都会被抽离
  // 所以 c类错误 实现了 接口 没有实现接口的私有成员;
  // private state2  = 0; 
}
// 接口继承类
interface AutoInterface extends Auto {

}
// 类 实现 AutoInterface ,或则说,AutoInterface约束 类
class C implements AutoInterface {
  state = 1
}
// Auto 的子类 也可以实现 AutoInterface接口
class bus extends Auto implements AutoInterface {
  // 不用实现 state属性 
  // 注意:接口在抽离 类的成员结构 时候, 公有 私有成员 受保护成员 都会被抽离
}
