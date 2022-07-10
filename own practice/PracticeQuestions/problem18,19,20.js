
//                      PROBLEM 18: Replace every element with its previous element

/*
function eleReplace (arr) {

   let start = -1
   for(i=0;i<arr.length;i++){
    let temp = arr[i]
    arr[i] = start
    start = temp
   }
   return arr
}
console.log(eleReplace([2,4,5,6,7]))
*/



//********************************************************************************************************** */

//                     PROBLEM 19: Given an integer N as input, find 1's complement of N.

 /*
 The ones' complement of a binary number is the value obtained by inverting all the bits in the 
 binary representation of the number (swapping 0s and 1s). 
 */

 /*
 function complement (nums){
    let number_of_bits = (Math.floor(Math.log(nums)/Math.log(2)))+1
    return ((1<<number_of_bits)-1)^nums
 }

 console.log(complement(4))
 */

 //********************************************************************************************************** */

 //                        PROBLEM 20 : Check if the string is a palindrome or not 

 // METHOD 1 >>>>>>

 /*
function isPalindrome (str){
   let str2 = str.toLowerCase()

   if(str2.length <= 1){
       return "true"
   }
   
   if(str2[0] == str2.slice(-1) && isPalindrome(str2.slice(1,-1))){
       return "they are palindrome"
   }else{
       return "they are not pallindrome"
   }
}
console.log(isPalindrome("madam"))
*/

// METHOD 2 >>>>>>>

    function isPalindrome (str){
           
      let str2 = str.toLowerCase().split(" ").reverse().join(" ")  

        if(str2 === str){                                                    
            return true                                                          
        }else{
            return false
        }
    }
    console.log(isPalindrome("madam"))

   