

                // find the UNIQUE elements from the array OR remove the DUPLICATES from the array

function uniqueArr (arr){
    let result = []
    for(let i =0; i<arr.length; i++){
        if(arr.indexOf(arr[i]) === i && arr.indexOf(arr[i], i+1)=== -1){
            result.push(arr[i])
        }
    }
    return result
}
console.log(uniqueArr([1,2,2,3,3,3,4,5,6,7,7])) // output will be [1,4,5,6]

/// HERE TIME COMPLEXITY IS O(N^2)


////////////////////////////////////////////////////////////////////////////////////////////////

                                        // USING FREQUENCY METHOD

/*
function uniqueArr (arr){
    let frequencyCount = {}
    let result = []

    for(let i in arr){
        frequencyCount[arr[i]] = frequencyCount[arr[i]] + 1 || 1
    }

    for(let i in frequencyCount){
        if(frequencyCount[i] == 1){
            result.push(i)
        }
    }
    return result
}
console.log(uniqueArr([1,2,2,3,3,3,4,5,6,7,7]))
*/

// HERE TIME COMPPLEXITY IS O(N)