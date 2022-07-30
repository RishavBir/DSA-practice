
// is "heart" and "earth" are anagrams or not ?

// const str1 = "heart"
// const str2 = "earth"

// function isAnagram(str1,str2){
//     str1= str1.toLowerCase()
//     str2= str2.toLowerCase()
//     if(str1.length !== str2.length){
//         return false
//     }
//     const str1CharCount = {}
//     for(let i=0; i<str1.length; i++){
//         const aChar = str1[i]
//         str1CharCount[aChar] = str1CharCount[aChar] +1 || 1
//         console.log(str1CharCount[aChar] )
//     }
    
//     for(let i=0; i<str2.length; i++){
//         const bChar = str2[i]
//         if(!str1CharCount[bChar]){
//             return false
//         }else{
//             str1CharCount[bChar]--
//         }
//     }
//     return true
// }
// console.log(isAnagram(str1,str2))


//********************************************************************************************* */

/*
const strA = "heart"
const strB= "Earth"

function isAnagram (strA,strB){

    str1 = strA.toLowerCase().split("").sort().join("")
    str2 = strB.toLowerCase().split("").sort().join("")

    if(str1===str2){
        return "They are anagrams"
    }else{
        return "They are not anagrams"
    }
}

// console.log(isAnagram(strA,strB))
// */

// //**********************************************************************************************/

 function isAnagram (str1, str2) {

    let obj1 = {}
    let obj2 = {}

    if(str1.length !== str2.length){
        return "they are not anagram";
    }

    for(let i in str1){
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1
     }
    for(let i in str2){
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1
     }
    for(let i in obj1){
      
         if(obj1[i] !== obj2[i]){
            return false
        }
 }

     return true
}

console.log(isAnagram("heart","earth"))
