import { ConcreteClass1, ConcreteClass2 } from './index';

const c1: ConcreteClass1 = new ConcreteClass1(),
  c2: ConcreteClass2 = new ConcreteClass2();

c1.templateMethod();
c2.templateMethod();

// 输出结果 ======
// templateMethod is being called
// method1 of ConcreteClass1
// method2 of ConcreteClass1
// method3 of ConcreteClass1
// templateMethod is being called
// method1 of ConcreteClass2
// method2 of ConcreteClass2
// method3 of ConcreteClass2