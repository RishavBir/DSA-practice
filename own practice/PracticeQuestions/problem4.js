
/*

Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

 Example 1:>>>>>>>

Input: nums = [1,2,3,1]
Output: true

Example 2:>>>>>>>

Input: nums = [1,2,3,4]
Output: false
*/

function containsDupli (arr){
    let frequencyCount = {}

    for(let i in arr){
        frequencyCount[arr[i]] = ( frequencyCount[arr[i]] || 0 ) + 1
    }
    for(let i in frequencyCount){
        if(frequencyCount[i] !== 1){
            return true
        }
    }
    return false
}

console.log(containsDupli([1,3,5,6,2,1]))     // true
console.log(containsDupli([1,3,5,6,2,8]))     // false