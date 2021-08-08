/*
1.  write a function called sumZero which accepts a sorted array of integers.
    The fumction should find the first pair where the sum is 0.
    Return an array that includes both values that sum to zero or
    undefined if a pair does not exist.

2.  implement a function  called countUniqueValues, which accepts a sorted array,
    and counts the unique values in the array. There can be negative numbers in the array,
    but it will always be sorted.
*/

// Solution 1:
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) return [arr[left], arr[right]]
        else if (sum > 0) right--;
        else left++;
    }
}

//Solution 2:
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}