
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

/*
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
    maxSum = Math.max(maxSum,tempSum)
  }
  return maxSum
}

console.log(maxSubArr([1,3,5,2,4,9,8,7],3))
*/


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

