
                        // PROBLEM 5:  Find all the prime numbers in the array [2,6,7,4,23,93,8,5]


const array = [2,6,7,4,23,93,8,5]

function primeNumbers(numbers){

    for (let i = 2; i<numbers; i++) {
        if (numbers % i === 0) {
          return false;
        }
      }
      return numbers > 1;
    }
    
 console.log(array.filter(primeNumbers))
 

 // ************************************************************************************************************

                        // PROBLEM 6:  Delete from array if multiple of 5 

 /*
function deleteMultipltOfFive (numbers){
    result = []
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] % 5 !== 0 ){
            result.push(numbers[i])
        }
    }
    return result
}
console.log(deleteMultipltOfFive([2,5,80,56,55,67]))
*/

//*********************************************************************************************************** */

            // PROBLEM 7: Given an array of integers, find the absolute difference between 
//                   the first and last element of the array.

/*
function absoluteDiff (numbers){
 return Math.abs(numbers[0]-numbers[numbers.length-1])
}
console.log(absoluteDiff([2,3,5,6,8]))
*/

//*********************************************************************************************************** */

                // PROBLEM 8 : Given an array of integers, find the summation between 
//                   the first and last element of the array.

            /*  METHOD 1

function sum (numbers){
 return Math.abs(numbers[0] + numbers[numbers.length-1])
}
console.log(sum([1,3,5,6,8]))

*/

             // METHOD 2    

 /*
 function sum (arr) {
    
    let sum; 

    for(let i=0 ; i<arr.length; i++){
        let max = arr[0]
        let min= arr[0]

        if (arr[i]>max){
            max = arr[i]
            } else if (arr[i]<min){
                min = arr[i]
            }
        sum = max + min
    }
  return sum
}
console.log(sum([1,3,5,6,8]))
*/
 
/************************************************************************************************************* */