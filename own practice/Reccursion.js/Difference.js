
                                //  WRITING FACTORIAL ITERATIVELY

/*function factorial (num){
    let total = 1;
    for( let i = num; i>0; i-- ){
        total *= i
    }
    return total
}

console.log(factorial(5))         // output will be 120  i.e 5*4*3*2*1 
*/

//************************************************************************************************** */

                                // WRITING FACTORIAL RECCURSIVELY

/* function factorial (num){
    if(num === 1){                //  BASE CASE
        return 1
    }
    return num * factorial(num - 1)
}

console.log(factorial(5)) */      // output will be 120  i.e 5*4*3*2*1 

//************************************************************************************************ */


                            // WRITING A CODE WITH HELPER - RECCURSIVE METHOD

/*
function collectOddValues (arr) {
    let result = []

    function helper (helperInput) {
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0 ){
            result.push (helperInput [0])
        }
        helper (helperInput.slice(1))
    }
    helper (arr)
    return result; 
}

console.log(collectOddValues([1,2,3,6,9,11]))
*/

/*********************************************************************************************************** */

//                           WRITE A CODE THROUGH PURE RECCURSIVE METHOD

/*                           
function collectOddValues (arr) {
    let newArr = []

    if(arr.length === 0 ){
        return newArr
    }
    if(arr [0] % 2 !== 0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))    // [1,3,5,7,9]
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>> METHOD ----- 2

function collectOdd (array){
    let result = []
    for(let i=0;i<array.length; i++){
        if(array[i] % 2 !== 0){
            result.push(array[i])         // if i do .....  >>>> result.push(i) <<< it will give me the index 
        }                                 // in which the odd values are present.
    }
    return result
}
console.log(collectOdd([1,2,3,4,5,6,7,8,9]))    // [1,3,5,7,9]
