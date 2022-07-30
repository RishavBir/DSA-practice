
                                            
                                            // USING INBUILT FUNCTION :
/*
 function rotateArr (arr, size) {
    let temp = 0;

    for (let i = 0; i < size; i++) {
       temp = arr.pop();
       arr.unshift(temp);
    }
   return arr;
  };

  console.log(rotateArr([1,2,3,4],3))
  */

  //******************************************************************************************** */

  // WITHOUT USING INBUILT FUNCTION

   function rotateArr (arr, size) {
    let j = arr.length - size % arr.length;
    let array = [...arr];
    
    for(let i=0; i<arr.length; i++) {
        if(j === arr.length) {
            j = 0;
        }
        arr[i] = array[j];
        j++;
    }
    return arr
};
  
 console.log(rotateArr([1,2,3,4],2))