
 /* ==== return falsy value on out of bound or negetive index.
    ==== Updates mode and return true.
 */

    class Node {
        constructor(data,next){
            this.data = data
            this.next = next
        }
    }
    
    class LinkedList{
        constructor(){
            this.head = null
            this.length = 0
        }

        set(index,data){
            if ( ! this.get(index) ){
                return false
            }
            const Node = this.get(index)
            Node.data = data
            return true
        }
    }