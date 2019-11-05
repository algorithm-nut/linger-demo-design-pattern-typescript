import { User, UserBuilder } from './index';

const u: User = new UserBuilder('Jancsi')
  .setAge(12)
  .setPhone('0123456789')
  .setAddress('asdf')
  .build();

console.log(u.Name + ' ' + u.Age + ' ' + u.Phone + ' ' + u.Address);

// 输出结果 ================
// Jancsi 12 0123456789 asdf