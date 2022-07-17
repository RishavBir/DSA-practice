
//                          PROBLEM 24: Find the unique elements than other array elements

// >>>>> NETHOD >>> USING FREQUENCY METHOD


function uniqueElements (arr){
     let result = []
     let obj = {}

     for(let i in arr){
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
     }
     for(let i in obj){
        if(obj[i] == 1){
            result.push(i)     
        }
     }
     return result
}

console.log(uniqueElements([1,3,2,2,3,1,4,9]))


//******************************************************************************************************** */

//                          PROBLEM 25 : Max Pair Sum

/*
function maxPairSum (array){
    let a = -Infinity , b = -Infinity

    for(let item of array){
        if( a < item && b > -Infinity){
            a = item
        }else if( b < item){
            b = item
        }
    }
    return a + b
    
}

console.log(maxPairSum([10, 14, 2, 23, 19]))  // 42   >>> [23,19]
*/

//******************************************************************************************************* */

//                      PROBLEM 26 : Find product of digits of number using recursion
// EX     >>>> 1231 
// OUTPUT >>>> 1*2*3*1 = 6

/*
function productOfDigits (arr){
    let product = 1;
   
    for (let i = 0; i < arr.length; i++) {
        product = product * arr[i]
    }
    return product;
}
console.log(productOfDigits([1,2,3,4]))
*/



  