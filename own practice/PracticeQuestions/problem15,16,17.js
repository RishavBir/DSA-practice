
//                          PROBLEM 15 : Check whether the given string is isogram or not

// >>> Isogram means the string doesnot contain any repeated character


function isIsogram (str){

    for(let i=0; i<str.length; i++){
        for(let j = i+1; j<str.length; j++){
        if(str[i] == str[j]){
            return "It is not isogram"
        }
    }
}
return "It is an isogram"
}

console.log(isIsogram("education"))
  

// >>>>>>>>>>>>>>>>>>> MWTHOD 2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// function isIsogram (str) {

//     let obj = {}

//     for(let i in str){
//         obj[str[i]] = (obj[str[i]] || 0) + 1
//     }

//     for(let i in obj){
//         if(obj[i] > 1){
//          return "They are not an isogram"
//         }else{
//             return "They are Isogram"
//         }
//     }
//     return obj
// }

// console.log(isIsogram("educationn"))


//************************************************************************************************ */

//                      PROBLEM 16 : Display all the leap years in a specific range

/*
function leapYear (){

   let result = []

    for(let i = 2001; i<= 2026; i++){
        if(i % 4 == 0){
        result += i + " "
        }
    }
    return result
}
console.log(leapYear(2026))
*/


//****************************************************************************************************** */

//                          PROBLEM 17: Number of substrings divisible by 6
/*
Input:  >>>>> 606
where:
>>>>> First line represents input string S.
 
Output: >>>>> 5

Explanation: >>>>>>>
Substrings "6", "0", "6", "60", "606" are divisible by 6.
*/

// function numberOfSubsStr (str){
//     let count = 0

//     for(let i = 0; i < str.length; i++){
//         for(let j = i; j< str.length; j++){
//             if(Number(str.slice(i,j+1)) % 6 == 0){
//                 count++
//             }
//         }
//     }
//     return count
// }
// console.log(numberOfSubsStr("606"))





