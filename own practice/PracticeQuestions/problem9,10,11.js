
//                    PROBLEM 9:  Check whether the given array is palindrome or not .>>>>>> [50505]

/*
function isPalindrome (arr){
    
    for(let i=0; i<(arr.length/2); i++){
        if(arr[i] != arr[arr.length-1-i]){
            return false
        }
    }
    return true
}
console.log(isPalindrome([5,0,5,0,5]))
*/

//***************************************************************************************************** */

//                   PROBLEM 10: Replace every element in the array by its frequency

/*
function replace(array){
    let map = new Map();
    
    for(let i=0; i<array.length ;i++){
        if(map.get(array[i]) == null){
            map.set(array[i],1);
        }else{
            map.set(array[i],(map.get(array[i])+1));
        }
    }
    for (let i=0; i<array.length; i++){
        if(map.get(array[i])!= null){
            array[i] = map.get(array[i]);
        }
    }
    return array.join(" ")
}

console.log(replace([1,3,3,5,5,5,6]))
*/
//******************************************************************************************************** */

//              PROBLEM 11: Count number of distinct pairs in the array whose sum exists in the given array.

function distinctPairs (nums){

    let temp = []

    for( let i=0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if(nums.includes(nums[i] + nums[j])){
     //The some() method tests whether 
     //at least one element in the array passes the test implemented by the provided function
                if(!temp.some(x => x.includes(nums[i]) && x.includes(nums[j])))
                    temp.push([nums[i],nums[j]])
            }
        }
    }
    return temp.length

}

console.log(distinctPairs([2,4,6,7,9,10,16]))