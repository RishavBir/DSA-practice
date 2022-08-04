
// check whether the subsequence is present in the array or not
 // array = [1,2,3,4,5]      subsequence = [1,2,3]

 /* DEFINITION: 

 A subsequence of a string is a new string that is formed from the original string 
 by deleting some (can be none) of the characters without disturbing the relative 
 positions of the remaining characters.
 */

 function validSubSequence (arr,subArr){

    if (arr == subArr) {
        return true
    }

    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] == subArr[i])
            i++;
    }

    return i == subArr.length;

 }
 console.log(validSubSequence([1,2,3,4,5] ,[2,5]))

 