class Node {
    constructor (value){
        this.value = value;
        this.left = null;
        this.right = null; 
        // reps a node in the tree
    }
}

class BinaryTree {
    constructor (){
        this.root=null;
    }
// Scans the tree, traverse left and right, then moves moves back to the root
preOrder(){ // coomonly used
    let result= [];
    function traverse (node){
        if (!node) return;
        result.push(node.value);
        // scanning the tree
        traverse(node.left);
        traverse(node.right); // Checks hat is in the node to get ready for ordering
    }
    traverse(this.root); // moves back to root
    return result;  // result of thw whole scan  
}
// Goes from Left, current node, and moves to the right.  Moves L & R
inOrder(){  // commonly used
    let result= [];
    function traverse (node){
        if (!node) return;
        traverse(node.left)
        result.push(node.value);
        // scanning the tree
        traverse(node.right); // Checks hat is in the node to get ready for ordering
    }
    traverse(this.root); // moves back to root
    return result;  // result of thw whole scan  
}

postOrder(){
    let result= [];
    function traverse (node){
        if (!node) return;
        traverse(node.left)
        traverse(node.right); 
        result.push(node.value);
    }
    traverse(this.root); // moves back to root
    return result;  // result of thw whole scan  
}
}

// Binary Search Tree class

class BinarySearchTree extends BinaryTree {

  constructor() {
      super();
  }

  // Add a new node to the BST
  add(value) {
      const newNode = new Node(value);
      if (!this.root) {
          this.root = newNode;
          return;
      }

      let current = this.root;

      while (true) {
          if (value < current.value) {
              if (!current.left) {
                  current.left = newNode;
                  return;
              }

              current = current.left;

          } else {
              if (!current.right) {
                  current.right = newNode;
                  return;
              }

              current = current.right;
          }
      }
  }

  // Check if a value exists in the BST

  contains(value) { //checks the current value exists
      let current = this.root;
      while (current) {
          if (value === current.value) return true;
          if (value < current.value) {
              current = current.left;

          } else {
              current = current.right;
          }

      }
      return false;
  }

}

module.exports = { Node, BinaryTree, BinarySearchTree };
 


