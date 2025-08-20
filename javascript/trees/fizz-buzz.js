

/* 
Start with the root node of the input tree.

Create a new root node with the fizzbuzzed value.

Recursively do the same for all its children.

Return the new tree. 
*/

function fizzBuzzValue(value) {
  if (value % 15 === 0) return "FizzBuzz"; // divisible by both
  if (value % 3 === 0) return "Fizz"; 
  if (value % 5 === 0) return "Buzz";
  return value.toString(); // just turn into a string 
}

// Node class: represents one node in the K-ary tree
// -----------------------------
class Node {
  constructor(value) {
    this.value = value;       // the number stored at this node
    this.children = [];       // array of child nodes (could be empty)
  }
}

// KaryTree class: wrapper to hold the root of the tree
// -----------------------------
class KaryTree {
  constructor(root = null) {
    this.root = root;         // the entry point to the tree
  }
}

// Helper function: applies FizzBuzz rules to a single number
// -----------------------------
function fizzBuzzValue(value) {
  if (value % 15 === 0) return "FizzBuzz"; // divisible by both 3 and 5
  if (value % 3 === 0) return "Fizz";      // divisible by 3 only
  if (value % 5 === 0) return "Buzz";      // divisible by 5 only
  return value.toString();                 // not divisible by 3 or 5 → convert number to string
}

// Main function: fizzBuzzTree
// Takes a KaryTree and returns a new tree with FizzBuzz values
// -----------------------------
function fizzBuzzTree(tree) {
  if (!tree.root) return new KaryTree(); // edge case: empty tree

  // Recursive helper: clones and transforms each node
  function cloneAndTransform(node) {
    // Apply FizzBuzz to the current node's value
    const newNode = new Node(fizzBuzzValue(node.value));

    // Recursively process all children
    for (let child of node.children) {
      const transformedChild = cloneAndTransform(child); // transform child node
      newNode.children.push(transformedChild);           // attach transformed child
    }

    return newNode; // return the newly transformed node
  }

  // Build a new tree using the transformed root
  const newTree = new KaryTree(cloneAndTransform(tree.root));
  return newTree;
}

// Example usage: Build a small tree and test fizzBuzzTree
// -----------------------------

// Create nodes
const root = new Node(15);    // divisible by 3 & 5
const child1 = new Node(3);   // divisible by 3
const child2 = new Node(5);   // divisible by 5
const child3 = new Node(7);   // not divisible by 3 or 5

// Link children to root
root.children.push(child1, child2, child3);

// Build the original tree
const tree = new KaryTree(root);

// Run fizzBuzzTree to transform values
const fizzBuzzedTree = fizzBuzzTree(tree);

// Output results
// -----------------------------
console.log("Original root value:", tree.root.value); // 15
console.log("Transformed root value:", fizzBuzzedTree.root.value); // "FizzBuzz"

console.log(
  "Transformed children values:",
  fizzBuzzedTree.root.children.map(c => c.value)
); // ["Fizz", "Buzz", "7"]