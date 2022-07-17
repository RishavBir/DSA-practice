
/*
NOTE >>>>>>> 1} for(i of arr) ====== Since we are using "of"...we get only values, not index.
             2} for(i in arr) ====== Since we are using "in"... we get only the index, not the value
 */

// Find the element from the array which have occured higest time

function maxChar (nums){
    let map = new Map(), max = 0 ,  char;

    for(let i of nums){
        if(map.has(i)){
            map.set(i, map.get(i) + 1)
        }else{
            map.set(i,1)
        }
    }
    for(let j of map){
        if(j[1] > max){
            max = j[1]              // HERE 1 AND 0 INDICATES THE KEY AND VALUE, 
            char = j[0]             //  KEY IS AT INDEX 0 AND VALUE IS AT INDEX 1
        }
    }
    return char
}

console.log(maxChar([1,2,4,4,4,5,7,7,8]))   // 4