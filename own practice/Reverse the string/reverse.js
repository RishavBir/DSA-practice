

                                    //WHITHOUT USING reverse()


function reverseStr (str){
    let res = "";
    for(let i=0;i<str.length; i++){
        res =  str[i] + res
    }
    return res
}
console.log(reverseStr("hello world"))    // dlrow olleh


//************************************************************************************************** */

                                    // THROUGH RECCURSION METHOD

/*
    hello >>>>> olleh

    reverse("ello") + h
    reverse("llo") + e + h
    reverse("lo") + l + e + h
    reverse("o")+ l + l + e + h

    >>>> olleh
*/

/*
function reverseStr (str) {

    if(str.length === 1){            // base case
        return str
    }
    return reverseStr(str.slice(1)) + str [0]      // reccursion core logic

}

console.log(reverseStr("help"))
*/




//****************************************************************************************************** */

                    // REVERSE A STRING ["h","e","l","p"] with using recursive method

 /*
 function reverseStr(str) {
    let length = str.length - 1
    let j = 0
    for(let i = length ; i >= length/2; i--){

         //SWAP
        let temp = str[i]
        str[i] = str[j]
        str[j] = temp
        j++
    }
    return str
}

console.log(reverseStr(["h","e","l","p"]))
*/

