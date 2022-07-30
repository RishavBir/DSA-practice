
// Find the missing number in an array

/*
1} [1,2,4,6,7]
2} [1,4,6]
3} [3,6,9]
*/


function missingNum (arr){

    let missArr = [];
    let minNum = Math.min(...arr)
    let maxNum = Math.max(...arr)

    for(let i = minNum; i < maxNum; i++){
        if(arr.indexOf(i) < 0) {
            missArr.push(i)
        }
    }
    return missArr
}
console.log(missingNum([2,4,8,7,10,9]))  // [ 3, 5, 6]


//******************************************************************************************************* */

// METHOD 2

/*
function missNumber(array){
    let  max = Math.max(...array),
        min = Math.min(...array), arr = [] , a=[]

        for(let i of array){
             arr[i] = i    
        }
        console.log(arr)
        for(let j = min; j <= max; j++){
            if(!arr[j]){
                a.push(j)
            }
        }
        return a
    }

    console.log(missNumber([3,4,-1,1]))
*/

