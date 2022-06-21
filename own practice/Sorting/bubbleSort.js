
 //pseudocode:

 /* 
 1} create a for loop that checks if the current iterated number and the next iterated numbers are greater or less 
    than each other.
  ==> If current number greater than next number swap using helper function.

 2} If current number greater than next number swap using helper function.
 3} Next above loop in an outer forloop that runs Array length times.
 4} Return the now sorted Array.
 */

 


function bubbleSort (arr){

    for(let i=0;i<arr.length; i++){
        for(let j=0; j<arr.length-i; j++){
            if(arr[j]>arr[j+1]){
               
                let temp = arr[j]   // swap
                 arr[j] = arr[j+1]
                 arr[j+1] = temp      // since value get updated thats why we cant write arr[j+1] == arr[j]
            }
        }
    }
    return arr
 }
 console.log(bubbleSort([6,9,4,7,1,5]))