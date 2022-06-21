
// PSEUDOCODE:

/* ==> loop over the longer string.
   ==> loop over the shorter string.
   ==> if the character dont match, break out the inner loop.
   ==> if the characters do match keep going.
   ==> if you complete the innerLoop and find the match, increment the count of matches.
   ==> return count
*/

let str1= "wowmomo"
let str2 = "wow"

function subStr (str1,str2){
    let count =0
    for(let i=0;i<str1.length; i++){
        for(let j=0; j<str2.length; j++){
            if(str1[i+j] !== str2[j]){
                break;
            }
            if(j===str2.length-1){
                count++
                
            }
        }
    }
    return count
}
console.log(subStr(str1,str2))