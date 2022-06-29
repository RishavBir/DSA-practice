                   
                                                // PALINDROME

/* 
pallindrome or not ("abba")
*/
 
/*                                    
let str = "madam"
    
let str2 = str.toLowerCase().split("").reverse().join("")  

    function isPalindrome (str){
           
        
        if(str2 === str){                                                    
            return true                                                          
        }else{
            return false
        }
    }
    console.log(isPalindrome(str))
 */


/****************************************************************************************************** */

// THORUGH RECCURSION METHOD

function isPalindrome (str){
    let str2 = str.toLowerCase()

    if(str2.length <= 1){
        return "true"
    }
    
    if(str2[0] == str2.slice(-1) && isPalindrome(str2.slice(1,-1))){
        return "they are palindrome"
    }else{
        return "they are not a pallindrome"
    }
}
console.log(isPalindrome("Madam"))