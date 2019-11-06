import { Builder } from './index';

const builder: Builder = new Builder();
let i = 0;
for (i = 1; i <= 3; i += 1) {
  console.log(builder.createOne('c' + i).toString());
}

