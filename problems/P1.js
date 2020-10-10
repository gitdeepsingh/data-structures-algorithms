/*
Write a function called same which accepts two arrays and 
the function should return true if every value in the array 
has its corresponding value squared in the second array. 
The frequency of values must be the same.

Examples:
same([1,2,3], [9,4,1])  > true
same([1,2,4], [1,16]) > false
same([1,2,1], [4,4,1]) > false (must be same frequency)
*/

// solution 1: time complexity = O(n^2)
function same1(arr1, arr2) {
  // iterate arr1
  const l1 = arr1.length;
  const l2 = arr2.length;

  if (l1 !== l2) {
    return false
  }
  for (let i = 0; i < l1; i++) {
    let index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) return false;
    arr2.splice(index, 1)
  }

  return true;
}

// solution 2: time complexity = O(n)

function same2(arr1, arr2) {
  // iterate arr1
  const l1 = arr1.length;
  const l2 = arr2.length;

  if (l1 !== l2) {
    return false
  }

  freqCounter1 = {};
  freqCounter2 = {};
  for (let val of arr1) freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  for (let val of arr2) freqCounter2[val] = (freqCounter2[val] || 0) + 1;

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false;
    if (freqCounter2[key ** 2] !== freqCounter1[key]) return false
  }
  return true;
}
