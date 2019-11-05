import {
  Context,
  ConcreteStrategy1,
  ConcreteStrategy2,
  ConcreteStrategy3,
} from './index';


// 策略模式必须知道所有的内容才能做出选择
let context: Context = new Context(new ConcreteStrategy1());
context.executeStrategy();

context = new Context(new ConcreteStrategy2());
context.executeStrategy();

context = new Context(new ConcreteStrategy3());
context.executeStrategy();

// 输出结果 ==============
// `execute` method of ConcreteStrategy1 is being called
// `execute` method of ConcreteStrategy2 is being called
// `execute` method of ConcreteStrategy3 is being called
