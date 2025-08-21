

// Main Merge Sort function
function mergeSort(arr) {
  // Base case: if the array has only 1 element, it is already "sorted"
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle point to split the array into two halves
  const mid = Math.floor(arr.length / 2);

  // Slice the array into left and right halves
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the two sorted halves back into one sorted array
  return merge(sortedLeft, sortedRight);
}

// Helper function to merge two sorted arrays
function merge(left, right) {
  let result = [];  // this will store the merged result
  let i = 0;  // pointer for left array
  let j = 0;  // pointer for right array

  // Compare elements from left and right, taking the smallest each time
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);  // left is smaller → add it to result
      i++; // move left pointer forward
    } else {
      result.push(right[j]); // right is smaller → add it to result
      j++; // move right pointer forward
    }
  }

  // If there are leftover elements in left, add them
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  // If there are leftover elements in right, add them
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result; // return the fully merged, sorted array
}


// Example usage with given array
// ==============================

const exampleArray = [8, 4, 23, 42, 16, 15];
console.log("Original Array:", exampleArray);

const sortedArray = mergeSort(exampleArray);
console.log("Sorted Array:", sortedArray);


// ==============================
/* 
INPUT:
Original Array: [8, 4, 23, 42, 16, 15]

OUTPUT:
Sorted Array:   [4, 8, 15, 16, 23, 42]
*/

