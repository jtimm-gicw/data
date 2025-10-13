// Simple assert helper for tiny tests
function assert(condition, message) {
  if (!condition) throw new Error("Assertion failed: " + (message || ""));
}

// Node class (optional; we keep nodes as values + adjacency map for simplicity)
class Graph {
  constructor() {
    // adjacencyMap: key -> array of neighbor keys (order matters for traversal)
    this.adjacencyMap = new Map();
  }

  // Add a node. Return true if added, false if it already existed.
  addNode(value) {
    if (this.adjacencyMap.has(value)) return false;
    this.adjacencyMap.set(value, []);
    return true;
  }

  // Add a directed edge from -> to.
  // If nodes don't exist, create them (convenient and common).
  // Return true if edge added (even if duplicate neighbor allowed here).
  addEdge(from, to) {
    if (!this.adjacencyMap.has(from)) this.addNode(from);
    if (!this.adjacencyMap.has(to)) this.addNode(to);
    this.adjacencyMap.get(from).push(to);
    return true;
  }

  // Return neighbors array (copy to avoid outside mutation).
  getNeighbors(node) {
    const neighbors = this.adjacencyMap.get(node);
    return neighbors ? [...neighbors] : null;
  }

  // Depth-first pre-order traversal starting at `start`.
  // Returns an array of node values in visitation order.
  depthFirst(start) {
    if (!this.adjacencyMap.has(start)) return null; // edge-case: start not in graph

    const visited = new Set();
    const output = [];

    // small recursive helper (single responsibility: visit node)
    const visit = (node) => {
      if (visited.has(node)) return;
      visited.add(node);        // mark visited
      output.push(node);        // pre-order: record immediately
      const neighbors = this.getNeighbors(node) || [];
      for (const nbr of neighbors) {
        visit(nbr);
      }
    };

    visit(start);
    return output;
  }
}

/* --------------------------
   Build the sample graph
   Expected traversal from 'A':
   A -> B -> C -> G -> D -> E -> H -> F
   -------------------------- */

const g = new Graph();

// Nodes optional (addEdge will create if missing), we add to show addNode usage:
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");
g.addNode("G");
g.addNode("H");

// Edges (directed), order matters for traversal
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("B", "C");
g.addEdge("C", "G");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "H");

// Run DFS
const result = g.depthFirst("A");
console.log("Traversal result:", result.join(", ")); // -> A, B, C, G, D, E, H, F

/* --------------------------
   Tests: Each method has at least 3 assertions
   -------------------------- */

// Tests for addNode()
(function testAddNode() {
  const gg = new Graph();
  // 1) Add new node returns true
  assert(gg.addNode("X") === true, "addNode should return true when adding new");
  // 2) Node exists in adjacency map
  assert(gg.adjacencyMap.has("X"), "addNode should create key in adjacencyMap");
  // 3) Adding existing node returns false
  assert(gg.addNode("X") === false, "addNode should return false when already exists");
  console.log("addNode tests passed");
})();

// Tests for addEdge() and getNeighbors()
(function testAddEdgeAndGetNeighbors() {
  const gg = new Graph();
  gg.addNode("P");
  gg.addNode("Q");
  // 1) Add edge returns true (and nodes already exist)
  assert(gg.addEdge("P", "Q") === true, "addEdge should return true");
  // 2) getNeighbors returns an array containing Q
  const nbors = gg.getNeighbors("P");
  assert(Array.isArray(nbors), "getNeighbors should return an array");
  assert(nbors.length === 1 && nbors[0] === "Q", "getNeighbors should list Q as neighbor");
  // 3) addEdge when from node didn't exist will create nodes implicitly
  gg.addEdge("R", "S"); // R and S didn't exist
  assert(gg.adjacencyMap.has("R") && gg.adjacencyMap.has("S"),
         "addEdge should create missing nodes");
  console.log("addEdge and getNeighbors tests passed");
})();

// Tests for depthFirst()
(function testDepthFirst() {
  const gg = new Graph();
  // build small graph with cycle and branches:
  // A -> B -> C -> A (cycle), A -> D
  gg.addEdge("A", "B");
  gg.addEdge("B", "C");
  gg.addEdge("C", "A"); // cycle
  gg.addEdge("A", "D");

  // 1) Pre-order should not infinite loop; should visit each node once.
  const out = gg.depthFirst("A");
  assert(Array.isArray(out), "depthFirst should return an array");
  // It should contain A,B,C,D but only once each
  const expectedSet = new Set(["A","B","C","D"]);
  assert(out.length === expectedSet.size, "depthFirst result length matches unique nodes");
  out.forEach(n => expectedSet.delete(n));
  assert(expectedSet.size === 0, "depthFirst should include all nodes reachable from A");

  // 2) Order test: starting from A, first must be A (pre-order)
  assert(out[0] === "A", "depthFirst must put start node first (pre-order)");

  // 3) Edge case: starting at node not in graph returns null
  assert(gg.depthFirst("Z") === null, "depthFirst should return null for missing start node");

  console.log("depthFirst tests passed");
})();

// Sanity-check test for the sample graph above
(function testSampleGraphOrder() {
  const sample = g.depthFirst("A");
  const expected = ["A","B","C","G","D","E","H","F"];
  assert(Array.isArray(sample), "sample traversal returns array");
  assert(sample.length === expected.length, "sample traversal has expected length");
  for (let i = 0; i < expected.length; i++) {
    assert(sample[i] === expected[i], `sample[${i}] expected ${expected[i]} got ${sample[i]}`);
  }
  console.log("Sample graph traversal matches expected order: ", sample.join(", "));
})();
