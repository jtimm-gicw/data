# Challenge Title
<!-- Challenge Name -->
hashmap-repeated-words
## Whiteboard Process
![Whiteboard Process ](img/hashmap_repeated-word-wp_cc31.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
**Approach Explanation**
Normalize input: remove punctuation, convert to lower-case.
Tokenize into words by splitting on whitespace.
Create an empty set seen.
Iterate tokens in order:
If token in seen, return token immediately.
Else add token to seen.
If finished loop with no repeats, return null (or "" depending on spec).
**The Big-O**
*Time Complexity:*
O(w) (scan tokens once; membership check in hash set is O(1) average).

*Space Complexity:*
Space: O(w) worst-case (the seen set holds each unique word).
## Solution
<!-- Show how to run your code, and examples of it in action -->
function normalize(text):
    // return text lowercased and with punctuation removed (except apostrophes if you want to keep them)
    return lowercased_text_with_punctuation_removed

function tokenize(text):
    normalized = normalize(text)
    // split by whitespace and filter out empty tokens
    return normalized.split(/\s+/).filter(token => token.length > 0)

function firstRepeatedWord(text):
    words = tokenize(text)
    seen = empty HashSet
    for word in words:
        if seen.contains(word):
            return word
        seen.add(word)
    return null   // or "" depending on spec

// Stretch:
function countWords(text):
    words = tokenize(text)
    counts = empty Map
    for word in words:
        counts[word] = counts.get(word, 0) + 1
    return counts

<!-- CHECKLIST: Whiteboard Process -->

 - [ x ] Top-level README “Table of Contents” is updated
 - [  ] README for this challenge is complete
       - [ x ] Summary, Description, Approach & Efficiency, Solution
       - [ x ] Picture of whiteboard
       - [ x ] Link to code
 - [ x ] Feature tasks for this challenge are completed
 - [  ] Unit tests written and passing
       - [ x ] “Happy Path” - Expected outcome
       - [ ] Expected failure
       - [ ] Edge Case (if applicable/obvious)
