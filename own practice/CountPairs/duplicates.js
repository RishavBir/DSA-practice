
                            // FIND DUPLICATES IN ARRAY...... [1,2,2,2,4,4,5,8]

/*
const arr1 = [1,2,2,4,4,5,8]

function duplicatesNum (arr){
    const arr2 = []
    
    for(let i =0; i<arr.length-1; i++){

        if(arr[i+1]=== arr[i]){
            arr2.push(arr[i])
        }
    }
    return arr2
}
console.log(duplicatesNum(arr1))

*/


//**********************************************************************************************************

 // METHOD NUMBER 2


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
