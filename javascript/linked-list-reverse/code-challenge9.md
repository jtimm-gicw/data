
# Challenge Title
<!-- Challenge Name -->
Linked-List-Reverse
## Whiteboard Process
![Whiteboard Process ](/img/linked-list-reverse-wp_cc10.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
**Approach Explanation**
Reverse an unsorted singly linked list where the last visited node becomes the head of the new list.

**The Big-O**
*Time Complexity:*
transverse the  list once only the time is O(n)

*Space Complexity:*
O(1) because the new LinkedList is the same size as before so no more space is taken up

## Solution
<!-- Show how to run your code, and examples of it in action -->
 function reverseList (linkedList) {
 insert(value) {
  const newNode = new Node(value);
  newNode.next = this.head;
  this.head= new Node;
  
  reverse(){
    let prev = null;
    let current = this.head;
    current = next;
    }
    
    this.head =prev;
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
       - [ x ] Edge Case (if applicable/obvious)