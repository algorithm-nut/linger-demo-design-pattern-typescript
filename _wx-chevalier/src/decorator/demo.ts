import { ConcreteDecorator, ConcreteComponent, Decorator } from './';

const decorator1: Decorator = new ConcreteDecorator(
  1,
  new ConcreteComponent('Comp1')
);

decorator1.operation();

// console ============= 
// `operation` of Decorator 1  is being called!
// `operation` of ConcreteComponent Comp1  is being called!
// `operation` of ConcreteDecorator 1  is being called!