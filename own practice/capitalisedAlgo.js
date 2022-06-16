
                                    // CAPITALIZED ALGORITHM
                                
/*Q} Write a function that return the provided string with the first letterof each words are capitalized
 and rest are in lowerCase.

ex -- "I am a robot" === "I Am A Robot"
*/

/*pseudocode: a} split the string into an Array.
            b} Iterate through the above Array, and store it in an empty Array.
                i) you can use splice or substring to grab parts of a string.
                ii} you can use the lowerCase and upperCase to apply according to the question.
            c} then the array back to the string. */

 const str1 = "I love adventures"

function capitalised (str){
    const arr1= str1.split(" ")         // converting the string into array
    const arr2 = []

    for (let i=0; i<arr1.length; i++){
        const word  = arr1[i]               // taling the variable "word" and stored the elements there
        arr2.push(word[0].toUpperCase() + word.slice(1).toLowerCase())     // here push the result in empty array
    }
return arr2.join(" ")
}
console.log(capitalised(str1)) 