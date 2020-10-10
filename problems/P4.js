/*
    given a sorted array of integers, write a function called search,
    that accepts a value and returns the index where the value passed
    to the function is located. If not found, return -1.

    search([1,2,3,4,5], 3) // 2
*/

// binary search: tc = O(logN)
function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);

        if (arr[mid] < val) min = mid + 1;
        else if (arr[mid] > val) max = mid - 1;
        else return mid;

    }
    return -1
}