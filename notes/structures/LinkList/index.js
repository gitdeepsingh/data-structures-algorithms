/*
#LINKED LIST
A linked list is a linear data structure similar to an array.
However, unlike arrays, elements are not stored in a particular memory location or index.
Rather each element is a separate object that contains a pointer or a link to the next object in that list.

Each element (commonly called nodes) contains two items: the data stored and a link to the next node. 
The data can be any valid data type. 

# An advantage
Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. 
This is one advantage it has over arrays.

# Disadvantages
Search operations are slow in linked lists. Unlike arrays, random access of data elements is not allowed.
Nodes are accessed sequentially starting from the first node.
It uses more memory than arrays because of the storage of the pointers.

In JavaScript, a linked list looks like this:

const list = {
    head: {
        value: 6
        next: {
            value: 10                                             
            next: {
                value: 12
                next: {
                    value: 3
                    next: null	
                    }
                }
            }
        }
    }
};

*/

import { ListNode } from './list-node.js';
import { LinkList } from './link-list.js';

//putting it all togetther
const node1 = new ListNode(12);
const node2 = new ListNode(100);
const node3 = new ListNode(678);
node1.next = node2;
node2.next = node3;

const list = new LinkList(node1)
console.log('LinkedList=', list);