# Challenge Title
<!-- Challenge Name -->
Rotate Matrix
## Whiteboard Process
![Rotate Matrix ](/img/rotate-matrix-wp_cc44.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
**Approach Explanation**
Rotate a square matrix (array of arrays) by 90° clockwise

There are ⌊n/2⌋ layers (outer to inner).
For each layer, for every position along the top edge, rotate four cells:
save top
left → top
bottom → left
right → bottom
saved top → right
This avoids any built-in methods and uses only indexed swaps.

**The Big-O**
*Time Complexity:*
O(n^2) — every element is moved exactly once.

*Space Complexity:*
(1) — in-place rotation (only a few temporaries).

## Solution
<!-- Show how to run your code, and examples of it in action -->
FUNCTION rotateMatrix(matrix):
    n ← length of matrix   // number of rows (and columns)
    
    FOR each layer from 0 to floor(n / 2) - 1:
        first ← layer
        last ← n - 1 - layer

        FOR i from first TO last - 1:
            offset ← i - first

            // save top element
            top ← matrix[first][i]

            // move left element to top
            matrix[first][i] ← matrix[last - offset][first]

            // move bottom element to left
            matrix[last - offset][first] ← matrix[last][last - offset]

            // move right element to bottom
            matrix[last][last - offset] ← matrix[i][last]

            // assign saved top to right
            matrix[i][last] ← top

    RETURN matrix

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
