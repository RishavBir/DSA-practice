
// Find the largest number from array

function largestNum (arr){
    let largest = - Infinity

    for(let i=0; i < arr.length; i++){
        if(largest < arr[i]){
            largest = arr[i]
        }
    }
    return largest
}
console.log(largestNum([-1,-2,-3,-9,-5]))
console.log(largestNum([1,2,3,9,5]))




