
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function breadthFirst(tree) {
  // Check if tree is empty
  if (!tree.root) {
    throw new Error("Tree is empty, nothing to traverse.");
  }

  // Initialize the queue & results array
  const queue = [];
  const results = [];

  // Start by enqueueing the root
  queue.push(tree.root);

  //Loop until the queue is empty
  while (queue.length > 0) {
    // Remove the first node in the queue
    const current = queue.shift(); // FIFO: First In, First Out

    // Add the node's value to results
    results.push(current.value);

    // Enqueue children if they exist
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }

  //Return all visited values
  return results;
}

/* 
Queue starts: [10] → visit 10 → enqueue 5, 15
Queue: [5, 15] → visit 5 → enqueue 2, 7
Queue: [15, 2, 7] → visit 15 → enqueue 20
Queue: [2, 7, 20] → visit 2 → no children
Queue: [7, 20] → visit 7 → no children
Queue: [20] → visit 20 → no children
Queue is empty → done.
*/