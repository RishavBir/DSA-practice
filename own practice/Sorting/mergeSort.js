/*
pseudocode:

 ==> Creating an empty array, tale a look at the smallest values in each input array.
 ==> While there are still values we haven't looked at.

        -- If the value in  the first array is smaller than the value in the second array,
           push the value in the first array in to our results and move on the next value 
           in the first array.

        -- If the value is in the first array is larger than the value in the second array, 
           push the value in the second array in to our results and move on the next value
           in the second array.

        -- Once we exhaust one array, push all remaining values from the other array.
*/


// arr1 = [1, 10, 15]
// arr2 = [2, 6, 30, 74, 32]

// function mergeSort(arr1, arr2) {
//     var resultArr = []
//     var i = 0;
//     var j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             resultArr.push(arr1[i])
//             i++
//         } else {
//             resultArr.push(arr2[j])
//             j++
//         }
//     }
//     // here we have to use two while loops to check the last consition that is, pushing
//     // all the remaining elements into the result array.
    
//     while (i < arr1.length) {
//         resultArrArr.push(arr1[i])
//         i++
//     }
//     while (j < arr2.length) {
//         resultArr.push(arr2[j])
//         j++
//     }
//     return resultArr;
// }

// console.log(mergeSort(arr1, arr2))

//*************************************************************************************************** */

/* PROBLEM :

==> You are given two strings word1 and word2. Merge the strings by adding letters in alternating order.
Ex
----- word1 = "abc"
      word2 = "pqr"
      output= "apbqcr"
*/


function mergeSort (word1,word2){

    let result = []
    
    for(var i=0; i<Math.min(word1.length, word2.length); i++){   // Math.min() returns ,
        result.push(word1[i],word2[i])                           // the lowest-valued number passed into it.
    }
    result.push(word1.slice(i))                // The slice() method extracts a part of a string. 
    result.push(word2.slice(i))                // The slice() method returns the extracted part in a new string.
    return result.join("")
    
}

console.log(mergeSort("abc","pqr"))