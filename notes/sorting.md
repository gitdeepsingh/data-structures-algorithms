// https://visualgo.net/en/sorting
// examples at P7.js

# SORTING
    > rearranging items in an order/basis
    > very commonly used, so important to know how it works
    > basic algos: bubble, selection, insertion [O(N^2)]
    > more efficient: merge, quick, radix [O(NlogN)]

## JS sort()
    > The sort() method sorts the elements of an array in place and returns the sorted array.  
    The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.  
    > ex:   ['b','d', 'a','c'].sort() outputs ['a', 'b', 'c', 'd']
            [1, 30, 4, 21, 100000].sort() outputs [1, 100000, 21, 30, 4]

## BASIC
    
### Bubble sort / sinking sort TC: O(N^2) to O(N); SC: O(1)
    > not so efficient
    > largest values bubble up to the top

### Selection Sort TC: O(N^2); SC: O(1)
    > compare values > Select the min value in arr > bring that min value up
    > Unlike bubble sort, it places smaller values into sorted position


### Insertion Sort TC: O(N^2) to O(N); iuSC: O(1)
    > builds up the sort by gradually creating a larger left portion which is always sorted
    > insert an item into that sorted portion in such a way that after insertion also that portion remains   sorted
    > good for online data i.e. data straem flowing in as we sort.

## ADVANCED

### Merge Sort
    > combination of : splitting + merging + sorting  
    > exploits the fact the arrays of 0 or 1 element are always sorted  
    > decomposes larger arrays into smaller sub-arrays until we end up with sorted arrays of 0 or 1 element.  
    > pseudo-code:   
        - break up the array into halves until you have arrays that are empty or have one element.  
        - merge those smaller arrays with other sorted arrays until we are back the full length of the actual array.  
        - once the array has been merged back together, return the merged (and sorted) arrays.  


