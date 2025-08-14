# Challenge Title
<!-- Challenge Name -->

## Whiteboard Process
![Whiteboard Process ](img/)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
**Approach Explanation**
Build a stack that can not only push, pop, and peek, but also tell you the biggest number currently in it — and decide how to store and retrieve that max value efficiently.

-When you push a number
- Put it on the main stack.
- If the max stack is empty or the new number is greater than or equal to the current max, also put it on the max stack.

When you pop a number
- Take it off the main stack.
- If that number is the same as the current max, also pop it from the max stack.

When you call getMax()
- Just look at the top number of the max stack — that’s the biggest number in the main stack.

**The Big-O**
*Time Complexity:*


*Space Complexity:*

## Solution
<!-- Show how to run your code, and examples of it in action -->

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
