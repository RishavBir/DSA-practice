
//                       PROBLEM 12 : Count occurrences of word in a given string

/*
function wordsCount (str,word){

    let str2 = str.split(" ")
    let count = 0
   
    for(let i=0; i<str2.length; i++){
        if(str2[i] === word){
            count++
        }
    }
    return count
}
console.log(wordsCount("Hello World Hello","Hello"))
*/


//************************************************************************************************************ */

//                  PROBLEM 13 : Remove Duplicate Character
/*
function removeDuplicate (arr){

    let result = []
    let object = {}
    
    for(let i in arr){
        object[arr[i]] = (object[arr[i]] || 0) + 1
    }
    for(i in object){
        if(object[i] == 1){
            result.push(i)
        }
    }
    return result
}

console.log(removeDuplicate([2,3,4,4,6,6,9]))
*/

//****************************************************************************************************** */

//              PROBLEM 14: Check whether strings are rotation of each other


function solution(str1,str2) {
      let flag = 0

      for(let i =0; i<str1.length; i++){
          str1 = str1.slice(1)+str1[0]
          if(str1 == str2)
              flag++
      }
      if (flag > 0){
          return "Yes"
      }
      else {
        return "No"
      }
    }
      console.log(solution("abcd", "cdab"))