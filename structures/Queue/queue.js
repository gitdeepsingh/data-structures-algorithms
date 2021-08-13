/*
Queue is dynamic set in which:
Element is inserted (ENQUEUE) to the end of the Queue (tail).
Element is deleted/removed (DEQUEUE) from the beginning of the Queue (head).
And the Delete operation is based on FIFO (First-In, First-Out) — 
like in real queue, the longest stayed person (aka the first on arrived to queue) got to go first.
*/

export default class Queue {
    constructor() {
        this.queue = [];

        this.qObj = {};
        this.head = 0;
        this.tail = 0;
    }

    add = (item) => {
        return this.queue.push(item);
    }

    remove = () => {
        if (this.queue.length) return this.queue.shift();
    }

    enQueue = (item) => {
        this.qObj[this.tail] = item;
        this.tail++;
        return this.qObj;
    }
    deQueue = () => {
        const size = this.tail - this.head;
        if (size <= 0) return console.log('Queue deQueue failed as Queue is Empty!');
        delete this.qObj[this.head];
        if (this.head === this.tail) {
            this.head = 0;
            this.tail = 0
        }
        return this.qObj;
    }
}