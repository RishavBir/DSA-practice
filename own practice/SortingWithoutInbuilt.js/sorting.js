
// sort the given array without using in-built function

                            // METHOD 1 : USING BUBBLE SORT ...... O(N^2) 

/*
const arr = [1, 6, 2, 9, 3]
let temp;

function sorting(arr) {

    for (i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {

            if (arr[i] > arr[j]) {
                // SWAP
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(sorting(arr))
*/

//************************************************************************************************ */

                // METHOD 2 : USING MERGE SORT ..... TIME COMPLEXITY IS >>>> O(n*Log n) <<<<<

 function merge (arr1,arr2){
    let result = [] , i = 0, j = 0

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }

    while( i < arr1.length){
        result.push(arr1[i])
        i++
    }
    while( j < arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
 }

 function sortedArr (array){
    if(array.length <= 1){
        return array
    }
    let middle = Math.floor(array.length/2)
    let left = sortedArr(array.slice(0,middle))
    let right = sortedArr(array.slice(middle))
    return merge(left,right)
 }
 console.log(sortedArr([1, 6, 2, 9, 3]))    // [1,2,3,6,9]


//************************************************************************************************ */

// const array1 = [{
//                   Name:"Aman",
//                   age:21,
//                  },

//              {
//               Name:"Aman",
//                  age:21,
//              }]
  
  // expected output: "21"
  // expected output: "21"
  
  
  // but I need only "21"

//   function Unique (array1){
//     for (let i=0; i<array1.length; i++){
//         for(let j =1; j<array1.length; j++){
            
//             if(array1[i].age === array1[j].age){
//                 return array1[i].age
//             }
//             if(array1[i].age !== array1[j].age){
//                 return "both are different"
//             }
           
//         }
//     }

//   }
//   console.log(Unique(array1))


