'use strict';

/*
 * Node Class
 * Represents a single node in a linked list.
 * Each node stores a key-value pair and a pointer to the next node.
 */
class Node {
  constructor(key, value) {
    this.key = key;     // unique identifier (like "name")
    this.value = value; // the data we want to store
    this.next = null;   // pointer to the next node (default: null)
  }
}

/*
 * LinkedList Class
 * Used for handling collisions inside each bucket of the hash table.
 * Each bucket can store multiple key-value pairs in a linked list.
 */
class LinkedList {
  constructor() {
    this.head = null; // start of the linked list (initially empty)
  }

  // Add a new key-value pair to the end of the linked list
  append(key, value) {
    if (!this.head) {
      // If list is empty, create the first node
      this.head = new Node(key, value);
    } else {
      // Otherwise, loop through until we reach the last node
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // Add new node at the end
      current.next = new Node(key, value);
    }
  }

  // Find a value in the linked list based on its key
  find(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        return current.value; // ✅ return value if key matches
      }
      current = current.next; // move to next node
    }
    return null; // key not found
  }

  // Check if a key exists in the linked list
  contains(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        return true; // ✅ key found
      }
      current = current.next;
    }
    return false; // key not found
  }
}

/*
 * HashTable Class
 * Stores key-value pairs in an array (buckets).
 * Each bucket is a linked list to handle collisions.
 */
class HashTable {
  constructor(size = 1024) {
    this.size = size;                         // number of buckets
    this.buckets = new Array(size).fill(null); // create array of empty buckets
  }

  // Hash function: converts a string key into an index
  hash(key) {
    let sum = 0;
    for (let char of key) {
      sum += char.charCodeAt(0); // add ASCII value of each character
    }
    return (sum * 599) % this.size; // multiply by prime to reduce collisions
  }

  // Add a key-value pair to the hash table
  add(key, value) {
    const index = this.hash(key); // find bucket index for this key

    if (this.buckets[index] === null) {
      // If bucket is empty, create a linked list
      this.buckets[index] = new LinkedList();
    }

    // Append the new key-value pair to the linked list at this bucket
    this.buckets[index].append(key, value);
  }

  // Retrieve a value by key
  get(key) {
    const index = this.hash(key); // find bucket index
    if (this.buckets[index] !== null) {
      return this.buckets[index].find(key); // search inside linked list
    }
    return null; // key not found
  }

  // Check if a key exists
  contains(key) {
    const index = this.hash(key); // find bucket index
    if (this.buckets[index] !== null) {
      return this.buckets[index].contains(key); // search inside linked list
    }
    return false; // key not found
  }
}

// Export classes for use in other files
module.exports = { Node, LinkedList, HashTable };
