
                            // FIND DUPLICATES IN ARRAY...... [1,2,2,2,4,4,5,8]

                                             // METHOD NUMBER 1

/*
const arr1 = [1,2,2,4,4,5,8]

function duplicatesNum (arr){
    const result = []
    
    for(let i =0; i<arr.length-1; i++){

        if(arr[i+1]=== arr[i]){
            result.push(arr[i])
        }
    }
    return result
}
console.log(duplicatesNum(arr1))

*/


//**********************************************************************************************************

                                            // METHOD NUMBER 2

/*
const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const set = new Set(numbers);

const duplicates = numbers.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
});

console.log(duplicates);
*/

//************************************************************************************************************* */

                                    // METHOD 3: USING FREQUENCY METHOD


function duplicatesElement (arr) {
    let result = []
    let obj = {}

    for(let i in arr) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1
    }
    for(let i in obj) {
        if (obj[i] !== 1) {
            result.push(i)
        }
    }
    return result
}
console.log(duplicatesElement([2,2,4,6,6,7,9,3,9,9]))   // [2,6,9]
