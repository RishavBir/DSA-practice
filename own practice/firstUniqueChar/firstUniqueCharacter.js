


function firstUniqueCharacter (str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(indexOf(str[i])) === str.charAt(lastIndexOf(str[i]))) {
            return i;
        }
    }
    return -1;
}
console.log(firstUniqueCharacter("aabbccdde"))