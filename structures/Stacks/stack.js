/*
The stack is a data structure that follows Last In First Out (LIFO) or First In Last Out (FILO)  principle.
The element that is added at last is accessed at first.
This is like stacking your books on top of each other. The book that you put at last comes first.
*/

class Stack {
    constructor() {
        this.stack_A1 = [];
        this.stack_A2 = [];
    }

    // Approach 1
    add_A1 = (item) => {
        return this.stack_A1.unshift(item);
    }
    remove_A1 = () => {
        if (this.stack_A1.length) return this.stack_A1.shift();
    }
    size_A1 = () => {
        return this.stack_A1.length;
    }
    isEmpty_A1 = () => {
        return this.stack_A1.length === 0;
    }
    peek_A1 = () => { // view the last element
        return this.stack_A1[this.stack_A1.length - 1];
    }

    // Approach 2
    add_A2 = (item) => {
        return this.stack_A2.push(item);
    }
    remove_A2 = () => {
        if (this.stack_A2.length) return this.stack_A2.pop();
    }
    size_A2 = () => {
        return this.stack_A2.length;
    }
    isEmpty_A2 = () => {
        return this.stack_A2.length === 0;
    }
    peek_A2 = () => { // view the last element
        return this.stack_A2[this.stack_A2.length - 1];
    }

    clear = () => {
        this.stack_A1 = [];
        this.stack_A2 = [];
    }
}

export default Stack;
