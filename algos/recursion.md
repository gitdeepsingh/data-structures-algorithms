# recursion
a process that calls itself.
ex: JSON.parse(), JSON.stringify(), DOM traversal algo
    problems/P5.js

Two essential parts of recursion: 1) Base Case 2) Different Input
Invoke the same function with different input until you reach the base case.

## call stack
    > we need functions /processes to be called in correct order,
    this is taken care by call stack.
    > It is a data structure
    > when a function is called it is placed at top of stack(push)
    > When JS sees return/ function ends, the compiler removes this (pop)

## outer and inner function: playing with function scope
 // this is NOT pure recursion!

    function outerHelper(input) {
        someData=[];

        function recursiveFunc(in) {
            // base case
            //input based return
        }

        recursiveFunc(input) // call

        return out;
    }

## Pure recursion TIP
    > For arrays, use methods like concat, spread operator, slice that make copies 
      of arryas and not mutate them






