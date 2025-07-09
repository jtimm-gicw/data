class Node {
    constructor (value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor (){
        this.head=null;
    }
    append(value){ // inserting value into new node, nodes are empty by default
        const newNode = new Node(value); // placeholder for new node
            if (!this.head){ // checks if there is a head with value
                this.head = newNode; 
                return;
            }
            let current = this.head;// currently at the head- 1st node
            while (current.next){ // points to the next empty node 
                current = current.next; // switches to the next node
            }
            current.next = newNode; // allows current node to have value
    }
   insertBefore(value, newValue) {
    const newNode = new Node(newValue);

    // If list is empty
    if (!this.head) {
        throw new Error('List is empty');
    }

    // If the value is at the head
    if (this.head.value === value) {
        newNode.next = this.head;
        this.head = newNode;
        return;
    }

    // Traverse the list to find the node before the one with the matching value
    let current = this.head;
    while (current.next && current.next.value !== value) {
        current = current.next;
    }

    // If value not found
    if (!current.next) {
        throw new Error(`Value ${value} not found in the list`);
    }

    // Insert newNode before the matching node
    newNode.next = current.next;
    current.next = newNode;
}

insertAfter(value, newValue) {
    const newNode = new Node(newValue);

    // If list is empty
    if (!this.head) {
        throw new Error('List is empty');
    }

    // Traverse to find the first node with the given value
    let current = this.head;
    while (current && current.value !== value) {
        current = current.next;
    }

    // If value not found
    if (!current) {
        throw new Error(`Value ${value} not found in the list`);
    }

    // Insert newNode after the matching node
    newNode.next = current.next;
    current.next = newNode;
}
}
module.export= {LinkedList, Node};