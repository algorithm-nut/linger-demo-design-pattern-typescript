import { Proxy } from './index';

const proxy1: Proxy = new Proxy('proxy1'),
  proxy2: Proxy = new Proxy('proxy2');

proxy1.doAction();
proxy1.doAction();
proxy2.doAction();
proxy2.doAction();
proxy1.doAction();

// console =============
// `doAction` of Proxy( proxy1 )
// creating a new RealSubject.
// `doAction` of RealSubject proxy1 is being called!

// `doAction` of Proxy( proxy1 )
// `doAction` of RealSubject proxy1 is being called!
// `doAction` of Proxy( proxy2 )
// creating a new RealSubject.
// `doAction` of RealSubject proxy2 is being called!
// `doAction` of Proxy( proxy2 )
// `doAction` of RealSubject proxy2 is being called!
// `doAction` of Proxy( proxy1 )
// `doAction` of RealSubject proxy1 is being called!