
/* ==== Add to the end of the list and increase the length
   ==== Adds to the end of empty list and increases the length without crashing.
*/

class Node {
    constructor (data,next){
        this.data = data
        this.next = next
    }
}

class linkedList {
    constructor (){
        this.head = null
        this.length = 0
    }

    push(data){
        if(!this.head){
            return this.unshift(data)
        }
        const last = this.getLast
        last.next = new Node (data)
        this.length++
    }
}