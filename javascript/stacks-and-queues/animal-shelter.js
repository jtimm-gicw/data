
// Class and constructor
class AnimalsShelter {
    constructor(){
        this.queue = []; // this empty array will the animals in the order they arrive
    }

// enqueue (add) animals
enqueue(animal) {
  if (
    animal &&
    (animal.species === "dog" || animal.species === "cat") &&
    typeof animal.name === "string" // this says that if the species is a dog or cat and that it is a 'string'
  ) {
    this.queue.push(animal); // add to the back of the line
  } else {
    throw new Error("Animal must be a cat or dog with a name.");// it will throw an error 
  }
}

// dequeue (remove) animals FIFO
dequeue(pref) {
  if (pref !== "dog" && pref !== "cat") {
    return null; // invalid request
  }

  // Loop through the queue to find the first animal that matches the preference (dog or cat)
for (let i = 0; i < this.queue.length; i++) {

  // Check if the current animal's species matches the given preference
  if (this.queue[i].species === pref) {

    // Remove that animal from the queue and return it
    // splice(i, 1) removes 1 item at index i
    // [0] is used to get the removed animal object from the array splice returns
    return this.queue.splice(i, 1)[0];
  }
  }

  return null; // if no animal of that type found
}}

/* 
✅ This keeps the FIFO nature (because we're searching from the front of the queue).

🛠 .splice(i, 1) removes the item at index i and returns it.

🧠 What’s Happening in Plain English
- The shelter has a line of animals.
- Someone says: "I want a dog."
- This loop starts checking animals from the front of the line (index 0) one by one.
- As soon as it finds a dog, it:
- Takes that dog out of the line
- Returns it so the person can adopt it
- If it doesn’t find any matching animal, the loop ends and returns null (in the full function).

✅ Why splice(i, 1)[0]?
- splice(i, 1) removes one item at index i
- But splice returns an array of removed items (even if it’s just one)
- So we use [0] to grab the actual animal object from that array

*/