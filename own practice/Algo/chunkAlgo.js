
                                // CHUNK ALGORITHM

/* Write a function that splits an array (first arguments) intp groups the length of size (second arguments) and
returns two dimensional array
example: chunk(["a", "b", "c", "d"],2) --> [["a","b"], ["c","d"]]
*/

const Arr = ["a", "b", "c", "d","e"]

function chunkArray(arr,size){
    let emptyArr = []

    for(let i=0; i<arr.length ; i++){
        
        const lastItem = emptyArr[emptyArr.length - 1]
        
        if (!lastItem || lastItem.length === size){
            emptyArr.push([arr[i]])
        }else{
         lastItem.push(arr[i])
        }
    }
    return emptyArr;
}
console.log(chunkArray(Arr,2)) 
