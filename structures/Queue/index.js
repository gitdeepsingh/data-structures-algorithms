import Queues from './queue.js';

console.log('###########################-QUEUES START-############################');
const q = new Queues();

console.log(':::::APPROACH 1 (arrays) :::::');
q.add(1);
q.add(10);
q.add(100);
q.add(1000);
q.add(10000);
console.log('QUEUE=', q.queue)

q.remove();
console.log('QUEUE AFTER REMOVE=', q.queue)


console.log(':::::APPROACH 2 (objects) :::::');
q.enQueue(23);
q.enQueue(789);
q.enQueue(99);
console.log('QUEUE Obj=', q.qObj);

q.deQueue();
console.log('QUEUE Obj AFTER REMOVE(FIFO)=', q.qObj);

console.log('###########################-QUEUES END-############################');