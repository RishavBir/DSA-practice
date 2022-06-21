
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

    getFirst(){
        return this.head
    }
}