
// PSEUDOCODE >>>>>> FOR INSERTING A NUMBER IN THE TREE
/*
--- Create a new node.
--- Start at the root.
    >> Check if there is a root, if not, the root becomes that  new node.
    >> If there is a root, check the value of the node is greater than or less than the value of the root.
    >> If it is greater :
            === Check to see if there is a node to the right 
                *** If there is, move to that node and repeate this steps.
                *** If there is not, add that node as the right property.
    >> If it is less :
            === Check to see if there is a node to the left 
                *** If there is, move to that node and repeate this steps.
                *** If there is not, add that node as the left property.
*/
//*********************************************************************************************************** */

/*
class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinearySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        var newNode = new Node(value)
        if (this.root === null) {
            return this
        } else {
            var current = this.root
            while (true) {
                if (value < current.value) {
                    if (current.value === null) {
                        current.left = newNode
                        return this
                    } else {
                        current = current.left
                    }
                } else if (value > current.value) {
                    if (current.value === null) {
                        current.right = newNode
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

}

var tree = new BinearySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
*/


function test (str){
 return str.split(" ").join("")
}
console.log(test("hello word"))