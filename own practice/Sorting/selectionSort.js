 /*
 For sorting an array of numbers at least to greatest selection sort by moving the 
 smaller values to start as its iterates through array.
 */

 function selectionSort (arr){

    for(let i=0; i<arr.length; i++){
        let lowest = i
        for (let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[lowest]){                   // HERE TIME COMPLEXITY IS >>>>>> O(N^2)
                lowest = j
            }
        }
        if(i !== lowest){
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest]= temp; 
        }
    }
    return arr
 }
 console.log(selectionSort([10,57,31,86]))