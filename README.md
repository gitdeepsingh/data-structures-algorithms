# Big O - to analyze performance
## Time complexity in JS
Relationship between runtime of an algo and the input provided.
When always contsant operations are performed on an input - O(1)
Number of ops is bounded by a multiple of n(say 10n) - O(n)
O(n) ops inside of a O(n) op - O(n^2)


## Space complexity* in JS
    primitives like boolean, null, undefined - constant O(1)
    strings - O(n)
    referece types like array - O(n)
        ,where n = length

## logs complexity*
<img src="/images/logs.JPG" width=250 height=250 />  

# Data Structures
    collections of values, the relationships among them, and the function or operations  
    that can be applied to data.  
    different data structures excel at different things.  
    Examples: Arrays, Linked Lists, Stacks, Trees, Graphs, Heaps

# Problem Solving
    1. understand the problem
    2. think of concrete examples (all possible input? outputs? special/edge cases?)
    3. break it down 
    4. solve / simplify
    5. revisit and refactor

# NOTES
    *auxiliary space complexity / space complexity - Space required by the algorith, excluding the input.
    *log2(8) = 3 => 2^3=8 i.e. log(value) = exponent => 2^exponent = value


# Abstract Data Type(ADT) 
#### It is a data type, where only behavior is defined but not implementation.

#### Opposite of ADT is Concrete Data Type (CDT), where it contains an implementation of ADT.

#### Examples:
Array, List, Map, Queue, Set, Stack, Table, Tree, and Vector are ADTs. Each of these ADTs has many implementations i.e. CDT. The container is a high-level ADT of above all ADTs.

#### Real life example:
book is Abstract (Telephone Book is an implementation)

Concepts or theoretical model that defines a data type logically
Specifies set of data and set of operations that can be performed on that data
Does not mention anything about how operations will be implemented
"Existing as an idea but not having a physical idea"
For example, lets see specifications of some Abstract Data Types,

List Abstract Data Type: initialize(), get(), insert(), remove(), etc.
Stack Abstract Data Type: push(), pop(), peek(), isEmpty(), isNull(), etc.
Queue Abstract Data Type: enqueue(), dequeue(), size(), peek(), etc. 
