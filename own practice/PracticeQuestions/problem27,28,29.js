
//                           PROBLEM 27: Find the even numbers from the array

/*
function evenEle (array){
    let result = []

    for(let i=0; i<array.length;i++){
        if(array[i] % 2 == 0){
            result.push(array[i])
        } 
    }
    return result
}
console.log(evenEle([1,4,7,9,6,3]))
*/

//*********************************************************************************************** */

//              PROBLEM 28: Count number of substrings with exactly K distinct characters

/*
function countSubsStr (str,k) {
    let count = 0

    let set =new Set();

    for( let i=0; i<str.length-k+1; ++i){
        set.clear()
        for(let j=i; j<str.length && set.size<=k; ++j){
            set.add(str[j])
            if(set.size ==k){
                ++count
            }
        }
    }
    return count;
}
console.log(countSubsStr("abcde", 2))
*/

//******************************************************************************************************** */




