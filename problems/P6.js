// Searching

// LINEAR

function linearSearch(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i
    }
    return -1;
}

linearSearch([34, 23, 5, 6, 1, 4, 2], 1);

// BINARY

function binarySearch(arr, val) { // pre-requesite: arr is sorted!
    let start = 0, end = arr.length - 1, mid;
    while (start <= end) {
        // mid = Math.floor((start + end) / 2);
        mid = (start + end) >> 1
        if (arr[mid] === val) return mid;
        else if (val < arr[mid]) end = mid - 1;
        else start = mid + 1;
    }
    return -1;
}

binarySearch([2, 3, 5, 7, 8, 9, 12, 34, 56, 57, 78, 89, 99], 5)