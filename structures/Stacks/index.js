import Stack from './stack.js';

const instance = new Stack();
console.log('###########################-STACKS START-############################');

console.log(":::::APPROACH 1 (shift/unshift) :::::");

instance.add_A1(10);
instance.add_A1(78);
instance.add_A1(1);
instance.add_A1(0);
instance.add_A1(456);

console.log('INITIAL STACK=', instance.stack_A1);

instance.remove_A1();
console.log('STACK AFTER ITEM OUT=', instance.stack_A1);

console.log("::::: Approcah 2 (push/pop) :::::");

instance.add_A2(10);
instance.add_A2(78);
instance.add_A2(1);
instance.add_A2(0);
instance.add_A2(456);

console.log('INITIAL STACK=', instance.stack_A2);

instance.remove_A2();
console.log('STACK AFTER ITEM OUT=', instance.stack_A2);

console.log('###########################-STACKS END-############################');
