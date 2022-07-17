

//                                       >>>>>> FULL CODE <<<<<<

// This include >>>>
// 1} Reverse of linkedlist , 
// 2} removeFirstNode from linkedlist , 
// 3} removeLastNode from likedlist


//NODE OF LIST

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

// LINKEDLIST

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

//INSERT AT HEAD

    insertAtHead(data) {
        var new_node = new Node(data);
        new_node.next = this.head;
        this.head = new_node;
        this.size++;
    }

//ISERT AT LAST IN LINKEDLIST

    insertAtLast(data) {
        if (!this.head) {
            return this.head = new Node(data)
        }
        var newNode = new Node(data);
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode
        newNode = null;
    }

/* FUNCTION TO REVERSE THE LINKEDLIST */

/* NOTE >>>> In full code we have to remove the parameters ...  ex: reverse(head) >>>>
here we dont need to write head inside reverse function.
*/ 


    reverse() {                             
        var prev = null;
        var current = this.head;
        var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return prev;
    }

////////////////////////////////////////////////////////////////

/*   removeFirstNode() {

        if (this.head == null)
            return null;
        // Move the head pointer to the next node
      let  temp = this.head;
        this.head = this.head.next;
        return this.head;
    }
*/

//////////////////////////////////////////////////////////////

/*
removeLastNode() {
    if (this.head == null)
        return null;

    if (this.head.next == null) {
        return null;
    }

    // Find the second last node
    var secondLast = this.head;
    while (secondLast.next.next != null)
        secondLast = secondLast.next;

    // Change next of second last
    secondLast.next = null;

    return this.head;
}
*/

/////////////////////////////////////////////////////////////

// PRINT LINKEDLIST

    printList() {
        var curr = this.head;
        while (curr) {
            console.log(curr.data)
            curr = curr.next;
        }
    }
}


let list = new LinkedList()
const array = [2, 3, 4, 5, 6, 7]
for (let i = 0; i < array.length; i++) {
    list.insertAtLast(array[i])
}
console.log("Singly Linked List")
list.printList();

// >>>>>>>>>>>>>>>>>>>>>>>>
//                                   >> REVERSING OF A LINKEDLIST

list.reverse();
console.log("After Reversing a Singly Linked List")
list.printList();


//*********************************************************************************************************** */

//                               >> REMOVE THE FIRST NODE FROM THE LIST
/*
list.removeFirstNode()
console.log(" Remove the first node from the list")
list.printList();
*/

//*********************************************************************************************************** */

//                              >> REMOVE THE LAST NODE FROM THE LIST
/*
list.removeLastNode()
console.log(" Remove the last node from the list")
list.printList();
*/
