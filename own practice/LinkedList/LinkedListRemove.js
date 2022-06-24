
/* ==== Return falsy value on out of bounds or negative index
   ==== Remove and return node at given index. Decreases length.
   ==== Remove node at index, decreases the length, and return removed i=nide
*/

class Node{
    constructor(data,next){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.next = 0
    }
    
    removed(index){
        if(! this.get(index)){
            return false
        }
        if(index ===0 ){
            return this.shift
        }

        const prevNode = this.get(index)
        const ToNoderemove = this.get(index)
        prevNode.next = prevNode.next.next
        this.length--
        return ToNoderemove;
    }
}