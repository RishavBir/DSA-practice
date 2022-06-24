
/* ==== Enqueue and Dequeue method exist
   ==== Queue has FIFO (First In First Out) behaviour.
   ==== Dequeue returns null or undefined on empty queue.
*/

class Queue{
    constructor(){
        this.data = []
    }
    enqueue (value){
        this.data.unshift(value)        // add the element in the begining of the array
    }
    dequeue (){
        return this.data.pop()          // remove the element from the end of the array
    }
}