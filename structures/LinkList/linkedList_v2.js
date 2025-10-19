class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new Node(value);
        if(!this.head) {
            this.head = value
        }
        let current = this.head.next;
        while(current.next) current = current.next;
        current.next = node;
    }

    delete(value) {
        if(!this.head) return;

        if(this.head.value = value) { 
            this.head = this.head.next;
            return;
        }
    }
}