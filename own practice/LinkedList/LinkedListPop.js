
/* ==== remove and return last node, decreases length.
   ==== removes and return last node, decreases kength on linkedList.
   ==== return null on empty list and doesnot decreases the length.
*/


class Node{
    constructor(data,next){
        this.data = data
        this.next = next
    }
}

class linkedList {
    constructor(){
        this.head = null
        this.length = 0
    }

    pop(){
        if(!this.head){
            return
        }
        if(this.length === 1){
            return this.shift()
        }
        const last = this.getLast()
        let current = this.head

        while(current.next !== last){
            current = current.next
        }
        current.next = null
        this.length-- 
        return last
    }
}