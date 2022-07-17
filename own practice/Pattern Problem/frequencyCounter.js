
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

 /*
function same (arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }

    let obj1 = {}
    let obj2 = {}

    for(let i in arr1){
        obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1
    }
    for(let i in arr2){
        obj2[arr2[i]] = (obj2[arr2[i]] || 0) + 1
    }

    for(let i in obj1){
        if( ! (i ** 2 in obj2)){
            return false
        }

        if(obj2[i ** 2] !== obj1[i]){
        return false
        }
    }
    return true
}

console.log(same([1,2,5,4],[1,25,4,16]))
*/


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
  //  let count = 0
    let obj = {}

    for(let i in arr){
        obj[arr[i]] = ( obj[arr[i]] || 0 ) + 1
    }
    for(let i in obj){
        if(obj[i] == 1){
            return true
           // count++
        }
    }
    // return count
    return false
}

console.log(uniqueOccurance([1,2,2,1,1,8,5]))
*/


//********************************************************************************************************* */

// Check whether they are anagram or not using FREQUENCY METHOD / OBJECT METHOD

/*
function isAnagram (str1,str2){
    let obj1 = {}
    let obj2 = {}

  if(str1.length !== str2.length){
    return false
  }
  for(let i in str1){
    obj1[str1[i]] = (obj1[str1[i]] || 0 ) + 1
  }
  for(let i in str2){
    obj2[str2[i]] = (obj2[str2[i]] || 0 ) + 1
  }

  for(let i in obj1){
    if(obj1[i] !== obj2[i]){
        return "They are not Anagram"
    }
  }
  return "They are Anagram"
}
console.log(isAnagram("heart","earth"))
*/

//********************************************************************************************************** */

// Find the unique elements from the array.

function uniqueElement (arr) {
    let result = [], obj = {}

    for(let i in arr) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
    }
    for(let i in obj) {
        if (obj[i] == 1) {
            result.push(i)
        }
    }
    return result
}
console.log(uniqueElement([2,2,4,6,6,7,9,3,9,9]))   // [3,4,7]



