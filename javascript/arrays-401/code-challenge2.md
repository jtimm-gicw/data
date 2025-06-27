# Challenge Title
insertShiftArray

## Whiteboard Process
![insertShiftArray ](/img/insertShiftArray-wp_cc2.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

**Approach Explanation**
Calculate the middle index
Let mid = floor(length of arr ÷ 2)
Create a new array that is one element longer than the input array
Loop through indices from 0 to new array length - 1:
If i < mid:
→ Copy arr[i] into newArr[i]
If i == mid:
→ Insert value into newArr[i]
If i > mid:
→ Copy arr[i - 1] into newArr[i]
(Shift everything after the mid forward by one)
Return the new array  

**The Big-O**
*Time Complexity:*
The time complexity is O(n) because I loop through the entire array once to build a new one. Each element is visited exactly one time.

*Space Complexity:*
The space complexity is also O(n) because I’m creating a new array that’s one item longer than the original, so it grows with the size of the input.  

## Solution
<!-- Show how to run your code, and examples of it in action -->
Initialize an array insertShiftArray.
At i = 0, it’s less than mid, so I copy arr[0] = 10 → newArr[0] = 10
At i = 1, same thing: arr[1] = 20 → newArr[1] = 20
At i = 2, this is the middle, so I insert 25 → newArr[2] = 25
At i = 3, I shift from the original array → arr[2] = 30 → newArr[3] = 30
At i = 4, shift again → arr[3] = 40 → newArr[4] = 40
"That gives me *[10, 20, 25, 30, 40]*, which is the correct result."

<!-- CHECKLIST: Whiteboard Process -->

 - [ x ] Top-level README “Table of Contents” is updated
 - [ x ] README for this challenge is complete
       - [ x ] Summary, Description, Approach & Efficiency, Solution
       - [ x ] Picture of whiteboard
       - [ x ] Link to code
 - [ x ] Feature tasks for this challenge are completed
 - [ x ] Unit tests written and passing
       - [ ] “Happy Path” - Expected outcome
       - [ ] Expected failure
       - [ ] Edge Case (if applicable/obvious)