/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.


Example 1:>>>>>>>

Input: nums = [2,2,1]
Output: 1

Example 2:>>>>>>>

Input: nums = [4,1,2,1,2]
Output: 4
*/

                                // METHOD 1 >>>>>> USING FREQUENCY COUNT METHOD

/*
function singleNum (nums){
  let result = []
  let frequencyCount = {}

  for(let i in nums){
    frequencyCount[nums[i]] = frequencyCount[nums[i]] + 1 || 1
  }

  for( let i in frequencyCount){
    if(frequencyCount[i] == 1){
        result.push(i)
    }
  }
  return result
}

console.log(singleNum([4,1,2,1,2]))               // HERE TIME COMPLEXITY IS O(N)   
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////

                            
                                  // METHOD 2 >>>> USING MAP FUNCTION


function singleNum (nums){
  let map = new Map(), char;

  for(let i of nums){
    if(map.has(i)){
      map.set(i,map.get(i) + 1)
    }else{
      map.set(i,1)
    }
    console.log(map)
  }

for(key of map){       // this is not the key of "KEY-VALUE PAIR", it is just a variable
  if(key[1] === 1){    // Here [1] is denote as VALUE & [0] is  denote as KEY
    char = key[0]
  }
}
return char
}

console.log(singleNum([3,3,1,6,6,6]))




