
/* ==== remove and return first node, updates length for linkedlist.
   ==== remove the first node and return it, decreases the length of the list.
   ==== doesnot crash and return null on empty list. Doesnot decreases the length.
*/

class Node {
    constructor(data,next){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0
    }

    shift(){
        if(!this.head){
            return
        }
        const oldHead = this.head
        this.head = this.head.next
        this.length--
        return oldHead
    }
}