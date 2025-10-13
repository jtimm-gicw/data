# Challenge Title
<!-- Challenge Name -->
2D Array
## Whiteboard Process
![2D-Arrray ](img/)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
**Approach Explanation**
Given an array of node values (like ['a','b','c']) and a square 2D array of booleans the same size as that nodes array.
The boolean at matrix[i][j] is true if node i connects (has an edge) to node j, and false otherwise. For each node i, produce a list of the nodes j where matrix[i][j] === true. That collection of lists (one per node) is the adjacency list.
Assume the matrix rows map directly to the nodes array: row 0 = node at nodes[0], etc.

Make an empty adjacency list structure (map/dictionary or array of arrays) keyed by each node.
For each row i in the matrix:
Create an empty list for node i.
For each column j in that row:
If matrix[i][j] is true, append nodes[j] to node i’s list.
Return the adjacency list.
Key idea: nested loops — outer loop over rows (source node), inner loop over columns (possible connected nodes). Whenever you see true add that target node to the source node’s list.

**The Big-O**
*Time Complexity:*
O(n²) — you must inspect every entry in the matrix once (nested loops).

*Space Complexity:*
O(n + e) where e is number of true entries (edges). In worst case (dense graph, all true) e = n² so space is O(n²). If graph is sparse, adjacency list uses much less memory than the matrix.
## Solution
<!-- Show how to run your code, and examples of it in action -->
function matrixToAdjList(nodes, matrix):
    // nodes: array of node values, length n
    // matrix: n x n boolean 2D array
    adjList = empty map/dictionary

    for i from 0 to n-1:
        adjList[nodes[i]] = empty list
        for j from 0 to n-1:
            if matrix[i][j] is true:
                append nodes[j] to adjList[nodes[i]]

    return adjList

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
