
// clear out the linked list and reset the length to 0

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

    clear(){
        this.head = null;
        this.length = 0
    }
}