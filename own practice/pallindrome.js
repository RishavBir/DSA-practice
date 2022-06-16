                   
                                                // PALINDROME

/* 
pallindrome or not ("abba")
*/
 
// const a = "abbs";
// const isPalindrome = a.split("").reverse().join("");
// console.log(a === isPalindrome);

                                            // OR

 //WHITHOUT USING reverse()


 const str1= "hello world"
 function reverse (str){
     let res = "";
     for(let i=0;i<str.length; i++){
         const char = str[i]
         res = char +res
     }
     return res
 }
console.log(reverse(str1))



                                            // OR
                                    
/*const str1 = "Madam"
    const str2 = str1.toLowerCase().split("").reverse().join("")            

    function isPalindrome (str){
        
        if(str === str2){                                                    
            return true                                                          
        }else{
            return false
        }
    }
    console.log(isPalindrome(str1))*/