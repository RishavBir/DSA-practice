
/*

Creating pointers that correspond to an index and move towards the begining, end or 
middle based on certain condition.

here ,  time complexity >>>>>>>>> O(N)
        space complexity >>>>>>>> O(1)

*/

/*
function sumZero (arr){

    let left = 0
    let right = arr.length - 1

    while(left < right){
        let sum = arr[left] + arr[right]
        
        if(sum === 0){
            return [arr[left],arr[right]]
        }
        else if (sum > 0){
            right--
        }else{
            left++
        }
    }
}

console.log(sumZero([-3,-2,-1,0,1,2,10]))

*/

//***************************************************************************************************** */

//QUESTION 2

/*
Given an integer array nums,move all 0's to the end of it
 while maintaining the relative order of the non-zero elements.

 EXAMPLE .....  [0,2,3,0,5,6,12] >>>>>> [2,3,5,6,12,0,0]
*/

/*
function moveZeroes (nums) {
    let left = 0
    let right = 1

    while(left < nums.length && right < nums.length) {
        if(nums[left] === 0 && nums[right] !== 0){

            // SWAP TAKE PLACE

            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left++
            right++

        } else if(nums[left]===0 && nums[right] === 0){
            right++
        }else{
            left++
            right++
        }
    }
    return nums
}

console.log(moveZeroes([3,0,4,6,7,0,1,5]))    // [3,4,6,7,1,5,0,0]
*/



///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.

Example 3:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

function squares (nums) {

    let squaredArr = Array(nums.length)
    let left = 0
    let right = nums.length - 1

    for(let i = right ; i >=0 ; i--){
        let squaredLeft = nums[left] ** 2
        let squaredRight = nums[right] ** 2
        if(squaredLeft > squaredRight) {
            squaredArr[i] = squaredLeft
            left++
        }else{
            squaredArr[i] = squaredRight
            right--
        }
    }
    return squaredArr
}

console.log(squares([-4,-1,0,3,10]))


//////////////////////////////////////////////////////////////////////////////////////////////////

/*
 count unique value by using two pointer method

 ex ==== [1,2,2,3,3,3,4,5,6,7,7]
*/


function uniqueVal (arr){
    var i = 0
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return i+1
}

console.log(uniqueVal([1,2,2,3,3,3,4,5,6,7,7]))   // total 7 unique numbers



