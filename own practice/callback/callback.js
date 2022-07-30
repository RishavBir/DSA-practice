
/*
>>>>> Callback function is a function that is passed onto another function as an argument which is then invoked 
inside that function to compare some actions
*/

// EXAMPLES OF CALLBACK FUNCTIONS


function a (f){
    console.log(f())
  }
  function pi(){
    return Math.PI
  }
  a(pi)