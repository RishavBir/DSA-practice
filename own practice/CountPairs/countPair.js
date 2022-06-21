
                         // COUNT PAIR WITH GIVEN SUM

function getPairCount (arr,n,sum){

    let count = 0;
    for(let i=0; i<n;i++){
        for(let j = i+1; j<n; j++){
            if(arr[i]+arr[j]===sum){
                count ++
            }
        }
        return count
    }
}
console.log(getPairCount([1,2,3,4],4,5))