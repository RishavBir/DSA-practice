//  How Many Numbers Are Smaller Than the Current Number
/*
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
*/

function smaller (arr){
    let ans = Array(arr.length).fill(0)

    for(let i=0; i<arr.length; i++){
        for(let j =0; j<arr.length; j++){
            if(i != j && arr[i] > arr[j]){
                ans[i]++
            }
        }
    }
    return ans
}

console.log(smaller([8,1,2,2,3]))