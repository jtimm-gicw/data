
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function tree_intersection(tree1Root, tree2Root, HashmapImpl) {
  // HashmapImpl is the Hashmap class/constructor (so this function uses your Hashmap)
  const map = new HashmapImpl();
  const result = new Set();

  // Helper: traverse and add values to hashmap
  function addToMap(node) {
    if (!node) return;
    map.set(node.value, true); // store presence of the value
    addToMap(node.left);
    addToMap(node.right);
  }

  // Helper: traverse second tree and collect intersections
  function collectIntersections(node) {
    if (!node) return;
    if (map.has(node.value) && !result.has(node.value)) {
      result.add(node.value);
    }
    collectIntersections(node.left);
    collectIntersections(node.right);
  }

  addToMap(tree1Root);
  collectIntersections(tree2Root);

  // Return an array or Set — spec says "a set", so return Set
  return result;
}

// Export for tests
module.exports = { Node, tree_intersection };
