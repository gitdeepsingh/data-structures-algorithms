examples at P6.js

# LINEAR SEARCH :: O(N)
    > examples in JS: indexOf, includes, find etc. -- 

linear search pseudo code:
FUNCTION LINEAR_SEARCH(ARRAY, VALUE)
    loop through the  ARRAY
        IF valueAtCurrentINDEX === VALUE
            return currentINDEX
    return -1;

# BINARY SEARCH :: O(1) || O(logN)
    > works only on sorted arrays/data
    > faster form search
    > rather than eliminating one element at a time, it eliminates
      half of the remaining elements
    > can be implemented via divide and conquer problem solving pattern!

binary search pseudo code:
FUNCTION BINARY_SEARCH(ARRAY, VAL) // sorted ARRAY
    let left=0;
    let right=ARRAY.length-1
    let middle = (left+right)/2 // use Signed right shift (>> 1)
    while ARRAY[middle] !== VAL:
        if(VAL > ARRAY[middle]): right=middle+1
        else: left=middle-1
        middle=(left+right)/2
    return middle 
    