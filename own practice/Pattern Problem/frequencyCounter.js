
/* 
===== This pattern uses onject or sets to collect values/ frequency of values.
===== This can avoid the need of nested loops or O(N^2) operations with arrays/ strings
*/

                                            // BY using NESTED LOOPS
/*
function same (arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    
    for(let i=0; i<arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false
        }
        arr2.splice(correctIndex,1)
    }
    return true
}

console.log(same([1,2,2,3], [1,4,9,4]))
*/

//  Here time complexity is o(n^2)...because indexOf also acts as loop so for it, it is 
//  o(n) ....and for forloop it again o(n)...total is o(n^2).

//************************************************************************************************* */

                                            // METHOD NUMBER 2

function same (arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }

    let frequencyCount1 = {}
    let frequencyCount2 = {}

    for(let value of arr1){
        frequencyCount1[value] = (frequencyCount1[value] || 0) + 1
    }
    for(let value of arr2){
        frequencyCount2[value] = (frequencyCount2[value] || 0) + 1
    }

    for(let key in frequencyCount1){
        if( ! (key ** 2 in frequencyCount2)){
            return false
        }

        if(frequencyCount2[key ** 2] !== frequencyCount1[key]){
        return false
        }
    }
    return true
}

console.log(same([1,2,5,4],[1,25,4,16]))


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, 
or false otherwise.

 Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
*/

/*
function uniqueOccurance (arr){

    let obj = {}
     for(let i of arr){
         if(obj[i]){
             obj[i]++
         }else{
             obj[i] = 1
         }
     }
    
    let arr2 = Object.values(obj)
    let set = new Set(arr2)
    
    if(set.size == arr2.length){
        return true
    }else{
        return false
    }
}

console.log(uniqueOccurance([1,2,2,1,1,3]))
*/