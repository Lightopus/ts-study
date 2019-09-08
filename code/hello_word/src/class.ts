// run(){} 方法的返回值是 void
// 构造函数的返回值 是这个类的本身;
//  类成员的属性  实例属性 不是原形 属性
//  类成员的方法 实例方法 不是原形 方法

// ts的类与es类的区别
/*
1. 实例的属性,必须有初始值,或则,在构造函数中 初始化;(ts)
*/
class Dog {
  // 构造函数 添加私有成员属性,那么这个类 就不能被实例化,也不能被继承;
  // private constructor (name: string) {
  // 构造函数 添加保护属性,那么这个类 就不能被实例化,只能被继承 是鸡肋;
  // protected constructor (name: string) {
  constructor (name: string) {
    // this.name = name // 初始化
  }
  name: string = 'dog'
  // public name: string = 'dog' 类成员的显示声明;
  // name?: string; // 可选属性
  
  run() { } // 默认是 公有成员
  private pri () {} // 私有成员
  protected pro () {} // 受保护成员
  readonly legs: number = 4; // 只读属性 也必须初始化
  static food: string = 'bones'

}
 console.log("Dog.prototype:",Dog.prototype);
 let dog = new Dog ('wangwang')
 console.log("dog:",dog);
  // console.log(dog.pri()) // 报错
  // console.log(dog.pro()) 报错 受保护成员 不能被实例成员访问;
 console.log(Dog.food)
//  console.log(dog.food) 子类不能调用 静态成员;

 //  ts类的继承
 class Husky extends Dog {
   constructor(name: string, public color: string) {
     // super 代表父类的实例
     // 派生类的构造函数必须包含super的调用. es中强行规定
     super(name) 
     this.color = color;
     // 子类调用私有成员 报错
    //  this.pri()
    // 子类 调用 受保护成员
    this.pro()
   }
  //  color: string; color变成了实例属性了 (public color: string) 所以要注释初始化
 }
 console.log(Husky.food) // 继承类调用静态成员;

 // 类的成员 修饰符,ts对es的扩展;
 // 构造函数的 参数也是可以添加这些 修饰符 作用: 将参数自动变成了实例的属性了;
 /*
 1.public修饰符 公有成员 ,类的所有成员都是public 含义: 对所有成员公开的, 也可以显式声明;
 // public name: string = 'dog' 类成员的显示声明;
 2. private修饰符 私有成员,只有类本身可以调用,其他都不能被调用;(子类 类实例等都不能调用)
 3. protected修饰符  受保护成员 只有在类本身 和子类中访问, 类的实例中不能 访问;
 3. reayonly修饰符   只读属性 不能更改 
 4. static修饰符     静态成员修饰符 类的静态成员,只能通过 类名 来调用 而不能通过子类来调用,
 但是可以被继承 继承类可以调;
 */

