
/*
=== This Pattern involves creating a window can either be an array from one position to another.
   
  === Depending on certain conditions, the window either increases or closes (and a new window is created).
  === Very useful for keeping track of a subset of data in an array / string etc.

  NOTE >>> IF THE QUESTION ASK TO FIND SUBARRAY, LARGEST SUM AND K (WINDOW SIZE) THEN THERE WE HAVE TO APPLY 
           SLIDING WINDOW CONCEPT.

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////


/*  QUESTION >>>

Find the Maximum sum of consecutive subarray of window size k = 3.
[1,3,5,2,4,9,8,7]
*/


//          NAIVE SOLUTION ..... TC >>>> O(N^2)...cuz we are using nested loop

// let arr....[1,3,5,2,4,9,8,7].....
// find the maxSum of consecutive pair 3 .....

/*
function maxSumSubArray(arr, pair) {
  if (arr < pair) {                             // suppose pair is 4 but array size is [2,3,5] ie, 3
    return null
  }
  let maxSum = -Infinity                   // summation of negatives num is negative. so we cant take maxSum = zero
  for (let i = 0; i < arr.length - pair + 1; i++) {    // here we have to take pair only upto [9,8,7] 
    tempSum = 0                                   // ... because next pair cant be formed
    for (let j = 0; j < pair; j++) {
      tempSum += arr[i + j]          // first increment then assigned the value to temp
    }
    if (tempSum > maxSum) {
      maxSum = tempSum
    }
  }
  return maxSum
}

console.log(maxSumSubArray([1, 3, 5, 2, 4, 9, 8, 7], 3))
*/


//                        USING SLIDIND WINDOW CONCEPT ..... TIMECOMPLEXITY IS >>>> O(N)


function maxSubArr (arr,size){

  let maxSum = 0
  let tempSum = 0

  if( arr.length < size){
    return null
  }
  for(let i =0; i< size ; i++){
    maxSum = maxSum + arr[i]
  }
  tempSum = maxSum

  for(let i = size ; i< arr.length; i++){
    tempSum = tempSum - arr[ i - size] + arr[i]
    maxSum = Math.max(tempSum,maxSum)
  }
  return maxSum
}

console.log(maxSubArr([1,3,5,2,4,9,8,7],3))



//************************************************************************************************************

/* QUESTION 2 >>>>> Longest Continious Increasing Subsequence */

/*
 function lonConInSub (array){

   let length = 0 , maxLength = 0
  for(let i = 0; i< array.length; i++){
    if(array[i] < array[i+1]){
      length++
    } else{
      length = 1
    }
     maxLength = Math.max(length,maxLength)
  }
  return maxLength
 }

 console.log(lonConInSub([3,5,6,7,4,8]))   // output will be 3
 */

//*********************************************************************************************************** */





