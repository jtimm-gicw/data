# Challenge Title
<!-- Challenge Name -->
Graph-Depth-First
## Whiteboard Process
![graph-depth-first ](img/graph-depth-first-wp_cc38.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
**Approach Explanation**
Start at node A (the starting point).
Mark A as “visited” so we don’t come back to it later.
Go to the first neighbor of A (that’s B).
Keep going deeper: from B → D → G, marking each one as visited.
When a node has no new neighbors, go back one step and continue with the next unvisited neighbor.
Continue until all reachable nodes are visited.
Return the list of nodes in the order you visited them.
✅ **Result:** A, B, D, G, C, E, F

**The Big-O**
*Time Complexity:*
**O(V + E)**
V = number of vertices (nodes)
E = number of edges (connections)
DFS visits each node once and checks each connection once — so the time grows with both.
The time it takes depends on how many points and connections your graph has. If you double the number of nodes and edges, it roughly takes twice as long.

*Space Complexity:*
**O(V)**
*DFS uses:*
A visited set to remember which nodes you’ve seen → up to V nodes
The recursion call stack (each call sits in memory) → up to V calls deep in the worst case
You need memory space to keep track of the nodes you’ve already visited and the path you’re currently exploring. That means memory grows as the graph grows — one slot per node.

## Solution
<!-- Show how to run your code, and examples of it in action -->
All nodes that are connected to the start node should appear in the result.
- Here: A, B, D, G, C, E, F → ✅ all included.

The first node should always be the *start node (A)*.
The traversal should *go deep before wide* —  
That means it should *reach G before going back to C*. ✅
There should be *no repeats* (because of the visited set). ✅
**If all those are true, your DFS is correct!**

function depthFirst(start):
  create empty set visited
  create empty list result

  function visit(node):
    if node in visited: return
    add node to visited
    add node to result
    for each neighbor of node:
      visit(neighbor)

  visit(start)
  return result
<!-- CHECKLIST: Whiteboard Process -->

 - [ ] Top-level README “Table of Contents” is updated
 - [ ] README for this challenge is complete
       - [ ] Summary, Description, Approach & Efficiency, Solution
       - [ ] Picture of whiteboard
       - [ ] Link to code
 - [ ] Feature tasks for this challenge are completed
 - [ ] Unit tests written and passing
       - [ ] “Happy Path” - Expected outcome
       - [ ] Expected failure
       - [ ] Edge Case (if applicable/obvious)
