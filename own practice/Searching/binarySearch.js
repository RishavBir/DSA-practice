
/*
=== Binary search works on sorted array.
=== much faster than the linear search due to presorted.
=== Binary search can achieve 0(logN) time complexity by eliminating half of remaining
    things to search for with each search.

PSEUDOCODE:
            a} create a left pointer index, that starts at 0.
            b} create a right pointer index that starts at length of array -1.
            c} while LP is less than or equal to RP
                i} Calculate middle index (roundup or down), and then middle value.
                ii} If middle value is equal to the value, return middle value.
                iii} If middle value too small, move left pointer up.
                iv} If middle value is too large, move the right pointer down
            d} return -1 {Since never found in while loop}
*/

function binarySearch(sortedArr,value){
    let start = 0                         // leftPointer starts from initials that's why it's 0
    let end = sortedArr.length-1

    while(start <= end){
        let middle = Math.floor((start + end)/2);
        let midValue = sortedArr[middle]

        if(midValue === value){
            return middle

        }else if(midValue < value){
            start = middle + 1
        }else{
            end = middle - 1
        }
    }
    return -1
}
//console.log(binarySearch([2,3,9,4,5,6,7],6))
//console.log(binarySearch([2,3,4,9,5,6,7],6)) 
console.log(binarySearch([2,3,4,5,6,7],6))