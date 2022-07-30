
// Write a function that returns the numbers of vowels found within a string.
// Vowels character are "a" , "e" , "i", "o" , "u"
// Make sure the function is case insesitive.
// Examples: vowels("what")=== 1
//           vowels("tower")===2


function vowels(str) {

    let str1 = str.toLowerCase()
    let vowels = "aeiou"
    let vowelsCount = 0
    for (let i = 0; i < str1.length; i++) {
        str1[i]
        for (let j = 0; j < vowels.length; j++) {
            vowels[j]

            if (str1[i] === vowels[j]) {
                vowelsCount++
            }
        }
    }
    return vowelsCount
}
console.log(vowels("Winter"))



