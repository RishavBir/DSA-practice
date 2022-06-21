
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

  getLast(){
    let currentNode = this.head
    
    while(currentNode && currentNode.next){
        currentNode = currentNode.next
    }
    return currentNode
  }
    
}