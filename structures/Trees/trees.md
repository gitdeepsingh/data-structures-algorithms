## TREE*
<img src="/images/tree.jpg" width=550 height=300 />



A tree is a data structure where a node can have zero or more children. Each node contains a value. Like graphs, the connection between nodes is called edges. A tree is a type of graph, but not all graphs are trees (more on that later).

These data structures are called “trees” because the data structure resembles a tree 🌳. It starts with a root node and branch off with its descendants, and finally, there are leaves.

Here are some properties of trees:

The top-most node is called root.
A node without children is called leaf node or terminal node.
Height (h) of the tree is the distance (edge count) between the farthest leaf to the root.
    A has a height of 3
    I has a height of 0
Depth or level of a node is the distance between the root and the node in question.
    H has a depth of 2
    B has a depth of 1


### EXAMPLE
`class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
  }
}`

We can create a tree with 3 descendants as follows:

`// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

// associate root with is descendants
abe.descendants.push(homer);
homer.descendants.push(bart, lisa, maggie);`

we have a tree data structure!

<img src="/images/tree-example.jpg" width=250 height=250 />

Let's consider below example,

<img src="/images/tree-array.png" width=750 height=300 />

In the examples above, the root is the array itself, and all its elements are children. If the child is not an array, then it is considered as a leaf node, otherwise — as an internal node. The internal node, in turn, consists of children.
