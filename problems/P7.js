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

bubbleSort([38, 41, 8, 3, 2, 9]) // [8,9,23,34,56,78]
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

bubbleSort2([38, 41, 8, 3, 2, 9]) // [8,9,23,34,56,78]
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

selectionSort([38, 41, 8, 3, 2, 9]) // [8,9,23,34,56,78]
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

insertionSort([38, 41, 8, 3, 2, 9]) // [8,9,23,34,56,78]
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

merge([1, 2, 3], [11, 12, 13, 14, 15, 16, 100]);