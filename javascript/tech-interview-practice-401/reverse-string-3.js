// 1: Convert string → char array, then swap characters from both ends moving inward using a while loop.

function reverseSwap(s) {
  if (s === null || s === undefined) return s;
  const chars = Array.from(s);           // handles surrogate pairs properly
  let left = 0, right = chars.length - 1;
  while (left < right) {
    const tmp = chars[left];
    chars[left] = chars[right];
    chars[right] = tmp;
    left++;
    right--;
  }
  return chars.join('');
}

// 2: Use JS array helpers: build an array of characters then call .reverse() and .join('').
// Implementation uses Array.from() for Unicode-correctness.

function reverseBuiltIn(s) {
  if (s === null || s === undefined) return s;
  return Array.from(s).reverse().join('');
}

// 3:  Use recursion to swap characters by index in an array. The public function converts the string to an array, then calls a recursive helper that swaps left and right and recurses. This avoids repeated concatenation and keeps the algorithm O(n).

// Important: recursion depth = O(n) (call stack). For very large strings this risks stack overflow; mention that during interview.

function reverseRecursive(s) {
  if (s === null || s === undefined) return s;
  const chars = Array.from(s);

  function helper(left, right) {
    if (left >= right) return;
    const tmp = chars[left];
    chars[left] = chars[right];
    chars[right] = tmp;
    helper(left + 1, right - 1); // recursion only, no loops
  }

  helper(0, chars.length - 1);
  return chars.join('');
}
