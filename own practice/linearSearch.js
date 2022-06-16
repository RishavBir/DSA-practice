
// Linear search algorithms will either return a boolean, index or value back.
// pseudocode:
// 1} Loop through an array
// 2} Donot use built in array methods like ..... indexOf(), inclues() etc, as they already 
// use linear search behind the scene.

////////////////////////////////////////////////////////////////////////////////////////////////////////

 const arr = ["pizza", "biriyani", "momo", "omlete"]

function searching(arr,value){         // here we find the indexOf the particular value we provide, 
                                       //  without using indexOf method.
    for(let i=0; i<arr.length; i++){
    if(arr[i]== value){
        return i
    }
  }
    return -1
}
console.log(searching(arr,"momo"))    // output will be 2 for momo

//************************************************************************************************* */

/*
const arr = ["pizza", "biriyani", "momo", "omlete"]

function searching(arr,value){         // here we have to check whether the provided value is present or not, 
                                       //  without using includes() method.
for(let i=0; i<arr.length; i++){
if(arr[i]== value){
return true
   }
 }
return false
}
console.log(searching(arr,"pizza"))
*/

//************************************************************************************************** */