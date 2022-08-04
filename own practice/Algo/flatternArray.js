
// FLATENED ARRAY


function flatternArray(arr) {
    let nums = []
    for (let i of arr) {
        if (Array.isArray(i) == false) {
            nums.push(i)
        }
        else {
            nums = nums.concat(flatternArray(i))
        }
    }
    return nums
}
console.log(flatternArray([1, 2, [4, 5, 6], 5, 8, 9, [2, 3], 10]))   // [1,2,4,5,6,5,8,9,2,3,10]
