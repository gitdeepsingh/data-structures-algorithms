/*
    write a function called maxSubarraySum which accepts an array of integers and
    a number called n. The function should calculate the maximum sum of n
    consecutive elements in the array.

    maxSubarraySum([4,2,1,6,2], 4) // 13
*/

// Solution 1: without SWP - O(n^2)
function maxSubarraySum(arr, n) {
    if (n > arr.length || arr.lenth === 0) return null;
    let max = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < n; j++) {
            temp += arr[i + j];
        }
        if (temp > max) max = temp;
    }
    return max
}

// Solution 2: refactored :SWP : O(n)
function maxSubarraySum(arr, n) {
    let temp = 0;
    let max = 0;
    if (n > arr.length || arr.lenth === 0) return null;

    for (let i = 0; i < n; i++) {
        max += arr[i];
    }
    temp = max;
    for (let i = n; i < arr.length; i++) {
        temp = temp - arr[i - n] + arr[i];
        max = Math.max(max, temp);
    }
    return max;
}
