
// Definiton : A sorting algo where the largest values bubble (shift) up to the right.

//  NOTE: It work for unsorted array

 //pseudocode:

 /* 
 ==== Start looping from which with a variable called i the end of the array towards the begining. 
 ==== Start an inner loop with a variable called j from the begining until i-1
 ==== if arr[j] > arr[j+1], swap those two values.
 ==== Return the sorted array.
 */

 


function bubbleSort (arr){

    for(let i=0; i<arr.length; i++){
        for(let j=0; j < arr.length-1; j++){
            if(arr[j] > arr[j+1]){

               // SWAP
                let temp = arr[j]   
                 arr[j] = arr[j+1]
                 arr[j+1] = temp      // since value get updated thats why we cant write arr[j+1] == arr[j]
                }
        }
   }
    return arr
 }
 console.log(bubbleSort([1,6,4,7,1,5]))


//////////////////////////////////////////////////////////////////////////////////////////////////////////

                                        // OPTIMIZATION OF BUBBLE SORT

/*
function bubbleSort (arr){
      var noSwap
       for(let i=0; i<arr.length; i++){
           noSwap = true
           for(let j=0; j < arr.length-1; j++){
               if(arr[j] > arr[j+1]){
   
                  // SWAP
                   let temp = arr[j]   
                    arr[j] = arr[j+1]
                    arr[j+1] = temp      // since value get updated thats why we cant write arr[j+1] == arr[j]
                   noSwap = false
                   }
           }
           if (noSwap){
               break
           }
       }
       return arr
    }
    console.log(bubbleSort([1,2,4,7,1,5]))
*/