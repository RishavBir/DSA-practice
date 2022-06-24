
/* ==== return null on negative or out of bounds index
   ==== return node at given index
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

    get(index){
        if(index > this.length || index < 0){
            return null
        }
        let counter = 0
        let current = this.head
        while(counter < index){
            current = current.next
            counter++
        }
        return current
    }
}