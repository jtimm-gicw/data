'use strict';

 const Node = require('./node');

 class LinkedList {
    constructor (){
        this.head = null; // linked list begins with a head
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
    includes(value){
        let current = this.head; // in first node
        while(current){ 
            if (current.value === value){ // chekcing if the value matches
            return true;
            }
            current = current.next; // naviagtes to the next, because we have not found the VALUE we are looking for
        }
        return false; // don't find value we are looking for
    }
   toString(){ 
    let current = this.head; 
    let linkedListStr = "";
    while (current){
        linkedListStr += `{${current.value}} -> `;
        current = current.next; 
    }
    linkedListStr += "NULL"; 
    return linkedListStr;
}
}

 module.export = LinkedList