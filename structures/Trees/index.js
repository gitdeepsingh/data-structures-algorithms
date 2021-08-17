import TreeNode from './tree';

const a = new TreeNode(5);
const b = new TreeNode(99);
const c = new TreeNode(100);
const d = new TreeNode(676);
const e = new TreeNode(2);

a.children.push(b);
b.children.pushe(c,d,e);

/*
                a
                |
                b
             /  |  \    
            c   d   e

*/