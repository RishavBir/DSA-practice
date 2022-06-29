

/*

==== Single Number (easy)
==== Two Single Numbers (medium)
==== Complement of Base 10 Number (medium)

*/

function reverse1(str){
    var emptyStr = "";
    for(var i = str.length - 1; i >= 0; i--){
        emptyStr += str.charAt(i);
    }
    return emptyStr;
  }
  console.log(reverse1("apple"))