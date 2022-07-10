

/* ==== Push and Pop method exists
   ==== Has FILO (First In Last Out) behaviour.
   ==== pop returns null / undefined for empty stacks.
*/

class stack {
    constructor(){
        this.data = []
    }

    push(value){
        this.data.push(value)           // here we can also use >>>> this.data.unshift (value)
    }

    pop(){                            
        this.data.pop()                 //  here we can also return >>>>> this.data.shift ()
    }
}


/* NOTE >>>>>>>>>   
                 here the time complexsity is O(1)
 */