https://visualgo.net/en/sorting  
examples at P7.js

# SORTING
    > rearranging items in an order/basis
    > very commonly used, so important to know how it works
    > basic algos: bubble, selection, insertion [O(N^2)]
    > more efficient: merge, quick, radix [O(NlogN)]

## JS sort()
    > The sort() method sorts the elements of an array in place and returns the sorted array.  
    The default sort order is ascending, built upon converting the elements into strings,  
    then comparing their sequences of UTF-16 code units values.  
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

### Merge Sort TC: O(NlogN), SC: O(N)
    > combination of : splitting + merging + sorting  
    > exploits the fact the arrays of 0 or 1 element are always sorted  
    > decomposes larger arrays into smaller sub-arrays until we end up with sorted arrays of 0 or 1 element.  
    > pseudo-code:   
        - break up the array into halves until you have arrays that are empty or have one element.  
        - merge those smaller arrays with other sorted arrays until we are back the full length of the actual array.  
        - once the array has been merged back together, return the merged (and sorted) arrays.  
    
  <img src="/images/mergeSort.JPG" width=500 height=250 />

  ##### BIG-O  
  let arr length=32  
  applying mergeSort, we will split this until we get 32 sub-arrays each with length=1  
  So, total number of times we need to split = 5 i.e.  
    32 > 16+16 > 8+8+8+8 > 4+4+4+4+4+... > 2+2+2+... > 1+1+1+1+1+....  
  This gives 2^5=32 => log(32)=5, here, bigO=O(logN)  
  and for N items we do merging as well after split => O(NlogN)  
  
  <img src="/images/mergeSort-bigO.JPG" width=500 height=125 />  

### Quick Sort
    > like merge sort, it also exploits the fact that arrays of 0 and 1 element are always sorted.  
    > works by selecting one element (called the pivot) and finding the index where the pivot should end up in the sorted array.  
    Basically positioning array elements that are less than pivot to the left and array elements greater  
    than the pivot to the right portions making sure that the pivot is always at the correct expected  
    spot.  
    (Ideally, pivot selected should be the middle, but as it is little challenging, so better choose first element as pivot).  
    > once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.  