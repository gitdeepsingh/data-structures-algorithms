# OBJECTS
## key value pairs, unordered
## BigO:

### fast:
    - insertion, removal, delete > O(1)
    - searching > O(n)

### obj methods
    - keys > O(n)
    - values > O(n)
    - enteries > O(n)
    - hasOwnProperty > O(1)

# ARRAYS
## ordered lists
## BigO
    - insertion > it depends (where we are doing it inside the array)
        ex: at the end > O(1)
            at the begin - we need to re-index every other entry > O(n)
    - removal > it depends
        ex: same as insertion
    - searching > O(n)
    - access > O(1)

### array methods
    - push > O(1)
    - pop  > O(1)
    - shift > O(n)
    - unshift > O(n)
    - concat > O(n)
    - slice > O(n)
    - sort > O(n*logn)
    - forEach/map/filter/reduce > O(n)

