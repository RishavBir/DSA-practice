
// >>>>>>>>>>>>>>>>>>>>>>>>>>>> SEPERATE CODE FOR INTERVIEW AND LEETCODE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// 1} reverse of the linkedList
// 2} removeFirstNode from the list
// 3} removeLastNode from the list

///////////////////////////////////////////////////////////////////////////////////////////////

//                          >>>>  1} REVERSE OF A LINKEDLIST <<<<


function reverse(head) {
        var prev = null;
        var current = head;
        var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        head = prev;
        return prev;
    }


//**************************************************************************************************** */

//                          >>>> 2} REMOVE THE FIRST NODE FROM THE LIST

/*
function removeFirstNode(head) {

        if (head == null)
            return null;
        let  temp = head;     // Move the head pointer to the next node
        head = head.next;
        return head;
    }
*/

//******************************************************************************************************** */

//                        >>>> 3} REMOVE THE LAST NODE FROM THE LIST

/*
function removeLastNode(head) {
    if (head == null)
        return null;

    if (head.next == null) {
        return null;
    }
    var secondLast = head;        // Find the second last node
    while (secondLast.next.next != null)
        secondLast = secondLast.next;

    secondLast.next = null;       // Change next of second last

    return head;
}
*/