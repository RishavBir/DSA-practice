
//                          PROBLEM 21:  FIND THE MISSING ELEMENT IN THE ARRAY

/*
function missingEle (array){
    let missing = []
    for(let i =4; i<=6; i++){
        if(array.indexOf(i) === -1){
            missing.push(i)
        }
    }
    return missing
}
console.log(missingEle([4,6]))
*/


//******************************************************************************************************** */

//                        PROBLEM 22:  Missing characters to make a string Pangram

// Pangram means >>>>> a sentence using every letter of a given alphabet at least once

/*
function pangram (str){

    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let missing=[]
    
    for(let i=0; i<alphabet.length;i++){
        if( ! str.includes(alphabet[i])) {
            missing.push(alphabet[i])
    }
}
        return missing.join("")
}
console.log(pangram("the quick brown fox jumps"))
*/

//*********************************************************************************************************** */

//                           PROBLEM 23: Frequency Character of a string

/*
function frequencyChar (str) {
let result = {}

for(let i = 0; i<str.length; i++){
    if(result[str[i]] == undefined){
        result[str[i]] = 1
    }else{
        result[str[i]] = result[str[i]] + 1
    }
}
return result
}
console.log(frequencyChar("judiciary"))
*/

//********************************************************************************************************** */