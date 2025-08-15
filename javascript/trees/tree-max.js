/* It doesn’t matter whether it’s pre-order, in-order, or post-order — you just need to make sure you visit every node once. */

// pre-order (Node → Left → Right)
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null; // If the tree has no root, there’s nothing to check → throw an error.
  }

  // Find the maximum value in the tree
  findMaximumValue() {
    // 1️⃣ Step 1: Check if the tree is empty
    if (!this.root) {
      throw new Error("Tree is empty, no maximum value found.");
    }

    // 2️⃣ Step 2: Initialize max with the root node's value
    let max = this.root.value;

    // 3️⃣ Step 3: Create a helper function to traverse
    const traverse = (node) => {
      if (!node) return;

      // Compare current node's value with max
      if (node.value > max) {
        max = node.value; // Update max if current node is bigger
      }

      // Visit left subtree
      traverse(node.left);

      // Visit right subtree
      traverse(node.right);
    };

    // 4️⃣ Step 4: Start traversal from root
    traverse(this.root);

    // 5️⃣ Step 5: Return the largest value found
    return max;
  }
}

/* 
What is happening...
- If the tree has no root, there’s nothing to check → throw an error.
- Start assuming the root is the largest number.
- Visit each node in the tree:
    - If you find something bigger, update your record.
- When you’ve visited everyone, give back the biggest number.
*/
