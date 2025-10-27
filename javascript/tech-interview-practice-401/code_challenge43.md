# Challenge Title
<!-- Challenge Name -->
Sprinklers & Valves
## Whiteboard Process
![Sprinklers ](img/)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
**Approach Explanation**
write a function that figures out how much total water is being used starting from any sprinkler you choose, including that sprinkler and all the sprinklers connected after it.

Use a depth-first traversal (recursive). For each node:
total = node.val + totalUsage(node.left) + totalUsage(node.right)
Every node must be visited exactly once → you’ll touch n nodes for n sprinklers.
**The Big-O**
*Time Complexity:*
 O(n) — every node is visited once.

*Space Complexity:*
O(h) for recursion call stack where h is tree height.
Best case (balanced tree): O(log n).
Worst case (completely skewed tree): O(n).
## Solution
<!-- Show how to run your code, and examples of it in action -->
function totalUsage(node):
    if node is null:
        return 0
    leftTotal = totalUsage(node.left)
    rightTotal = totalUsage(node.right)
    return node.val + leftTotal + rightTotal
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
