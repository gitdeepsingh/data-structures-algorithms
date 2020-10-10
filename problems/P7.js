/* ###################### JS sort() ####################*/
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

// so to compare numbers we do use a comparator(a,b)
// if it returns -ve => a should come before b
// if it returns +ve => a should come after b
// if it returns 0 => a and b are same

function numCompareASCE(num1, num2) {
  return num1 - num2;
}

function numCompareDESC(num1, num2) {
  return num2 - num1;
}

[23, 4, 21, 6, 8, 0, 88, 65].sort(numCompareASCE);
// output: [0, 4, 6, 8, 21, 23, 65, 88]

[23, 4, 21, 6, 8, 0, 88, 65].sort(numCompareDESC);
// output: [88, 65, 23, 21, 8, 6, 4, 0]


/* ###################### bubble sort ####################*/


// below code will keep iteratingh even if arr is already sorted before loop completes, 
//so lets make bubbleSort2
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log('>>>>>>', arr)
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([38, 41, 8, 3, 2, 9]) // [2, 3, 8, 9, 38, 41]
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]) // [1,2,3,4,5,6,7, 8] // loop runs 28 times

// optimization
function bubbleSort2(arr) {
  var isNoSwaps = false;
  for (var i = arr.length; i > 0; i--) {
    isNoSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      console.log('>>>>>>', arr)
      // console.count(arr)
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isNoSwaps = false;
      }
    }
    if (isNoSwaps) break;
  }
  return arr;
}

bubbleSort2([38, 41, 8, 3, 2, 9]) // [2, 3, 8, 9, 38, 41]
bubbleSort2([8, 1, 2, 3, 4, 5, 6, 7]) // [1,2,3,4,5,6,7, 8] // loop runs 13 times


/* ###################### selection sort ####################*/

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = i
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (i !== min) { // to optimize
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }

  }
  return arr;
}

selectionSort([38, 41, 8, 3, 2, 9]) // [2, 3, 8, 9, 38, 41]
selectionSort([8, 1, 2, 3, 4, 5, 6, 7]) // [1,2,3,4,5,6,7,8]

/* ###################### insertion sort ####################*/

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr;
}

insertionSort([38, 41, 8, 3, 2, 9]) // [2, 3, 8, 9, 38, 41]
insertionSort([8, 1, 2, 3, 4, 5, 6, 7]) // [1,2,3,4,5,6,7,8]


/* ###################### merge sort ####################*/
// PART 1: Merge Function
/* creating a function merge for merging two sorted(in same order) arrays (with sizes n and m) to get a sorted
array result with all those elements. This should run in O(n+m) time and O(n+m) spcace and should not
modify the parameters paased to it.
PSEUDO CODE
- create and empty array, take a look at all the smallest values in each input array
- while there are still values we have not looked upon:
        # if the value in the first array is smaller than the value in the second array,
          push the value in the first array into our results and move onto the next value
          in the first array.
        # if the value in the first array is larger than the value in the second array,
          push the value in the second array into our results and move onto the next value
          in the second array.
        # once we exhaust one array, push in all remaining vlaues from the other array.

*/
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    // push the smaller from two arrays
    if (arr1[i] < arr2[j]) { results.push(arr1[i]); i++; }
    else { results.push(arr2[j]); j++ }
  }
  while (i < arr1.length) { results.push(arr1[i]); i++ } // still elements present in arr1 that are not yet looked upon
  while (j < arr2.length) { results.push(arr2[j]); j++ } // still elements present in arr2 that are not yet looked upon
  return results
}
// merge([1, 2, 3], [11, 12, 13, 14, 15, 16, 100]);

// PART 2:
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = arr.length >> 1;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([38, 41, 8, 3, 2, 9]) // [2, 3, 8, 9, 38, 41]
mergeSort([8, 1, 2, 3, 4, 5, 6, 7]) // [1,2,3,4,5,6,7,8]

/* ###################### quick sort ####################*/
// PART 1: Pivot Helper Function
/*PSEUDO-CODE
  > It will help to accept three arguments: an array, start index(0), end index(array length-1)
  > Grab the pivot from the start of the array.
  > Store the current pivot index in a variable (this will keep of where the pivot should end up).
  > Loop through the array:
        > if pivot is greater than the currenet element, increment the pivot index variable and
        then swap the current element with the element at the pivot index
  > Swap the starting element(the pivot) with the pivot index.
  > Return the pivot index.
*/

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  var pivot = arr[start];
  var swapIndex = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}
// pivot([4, 8, 2, 1, 5, 7, 6, 3]) // 3

// PART 2:
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1); // left
    quickSort(arr, pivotIndex + 1, right); // right
  }
  return arr;
}

quickSort([38, 41, 8, 3, 2, 9]) // [2, 3, 8, 9, 38, 41]

/* ###################### radix sort ####################*/
// PART 1: Helper functions
/*
getDigit(num, place): returns the digit in num at the given place value.
digitCount(num): returns the number of digits in num.
mostDigits(nums): given an array of numbers, returns the number of digits in
the largest number in the list (uses digitCount).
*/
function getDigit(num, i) { // taken from stackoverflow:)
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
//getDigit(456345, 3); // 6

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// digitCount(654); // 3

function mostDigits(nums) {
  let max = 0;
  nums.forEach(elem => {
    max = Math.max(max, digitCount(elem))
  });
  return max;
}
// mostDigits([43234, 34, 34, 33, 2, 333])

// PART 2:
function radixSort(nums) { // nums is array of numbers
  let maxDigitsCount = mostDigits(nums);
  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []) // 10 slots
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums
}

radixSort([38, 41, 8, 3, 2, 9]) // [2, 3, 8, 9, 38, 41]
