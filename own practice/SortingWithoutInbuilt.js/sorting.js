
// sort the given array without using in-built function

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