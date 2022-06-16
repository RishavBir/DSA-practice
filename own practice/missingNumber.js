
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

    for(let i=minNum; i<maxNum; i++){
        if(arr.indexOf(i)<0){
            missArr.push(i)
        }
    }
    return missArr
}
console.log(missingNum([1,2,4,6,7]))

