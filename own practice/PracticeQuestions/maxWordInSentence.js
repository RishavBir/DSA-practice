
// Maximum Number of Words Found in Sentences
/* EXAMPLE >>>> Input: sentences = ["alice and bob love leetcode", "i think so too", 
                                   "this is great thanks very much"]
Output: 6
*/

function mostWordFound (str){
    let max = 0, temp = 0

    for(let i=0; i<str.length; i++){
        temp = str[i].split(" ").length
        if(temp > max){
            max = temp
        }
    }
    return max
}

console.log(mostWordFound(["alice and bob love leetcode", "i think so too", 
"this is great thanks very much"]))
