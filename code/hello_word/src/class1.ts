// 抽象类 :只能被继承 不能实例化的类;
// 抽象类需要用abstract 关键字 + class 声明;
abstract class Anima {
  // 抽象类 可以定义有具体实现的 方法  ,那么子类就不用实现了 实现方法复用 (具体方法)
  eat () {
    console.log('eat')
  }
  // 抽象类 可以定义没有具体实现的方法 (前提: 明确多个子类 对方法的实现方式不一样;)(抽象方法)
  abstract sleep (): void;
}
// 抽象类不能被实例化;
// let animal = new Animal()  // 抽象类不能实例化
class Dog1  extends Anima {
  constructor (name: string) {
    super() // 派生类必须调用 super()方法;
    this.name = name;
  }
  name: string;
  run () {}
  // 如果明确 多个子类 实现的方法 不同,将各个子类  具体实现 父类的抽象方法 ,实现运行时的绑定;
  sleep () {
    console.log('dog sleep')
  }
}
let dog1 = new Dog1('wangwang')
dog1.eat() // 子类的实例可以调用 

// ts中的多态
class Cat extends Anima {
  sleep () {
    console.log('Cat Sleep')
  }
}
let cat = new Cat();
let animals: Anima[] = [dog1, cat]
animals.forEach(v => {
  // 注意: 在程序执行的阶段, 当调用v.sleep()时候,就会判断 具体的实例 是那一种  然后调用不同的方法,实现了 多态
  v.sleep() 
})

// ts中的this类型
// 类的成员方法 可以返回一个this  方便实现链式调用
class WorkFlow {
  step1 () {
    return this;
  }
  step2 () {
    return this;
  }
}
new WorkFlow().step1().step2(); // 链式调用;
// 注意: 在继承的时候,this 也可以表现出多态; 这里的多态表示 this即可以是父类型,也可以是子类型;
// 关键点 子类继承了父类 子类 和父类都返回了 this 代表自身;

class Myflow extends WorkFlow {
  next () {
    return this; // 此时this 代表子类
  }
}
new Myflow().next().step1().next().step2()

