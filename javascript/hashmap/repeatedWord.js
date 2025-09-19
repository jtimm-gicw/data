// repeatedWord.js

// ----------normalize ----------
/**
 * normalize(text)
 * - Lowercases the text
 * - Replaces non-alphanumeric characters with spaces (removes punctuation, apostrophes, etc.)
 * - Collapses multiple whitespace into single spaces, trims ends
 */
function normalize(text) {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]+/g, ' ') // replace punctuation with space
    .replace(/\s+/g, ' ')          // collapse multiple spaces/newlines/tabs
    .trim();
}

// ----------tokenize ----------
/**
 * tokenize(text)
 * - Uses normalize to clean the text
 * - Splits on space to return an array of words
 *
 * Example: "Hello world" -> ["hello", "world"]
 */
function tokenize(text) {
  const normalized = normalize(text);
  if (normalized === "") return [];
  return normalized.split(' ');
}

// ----------firstRepeatedWord ----------
/**
 * firstRepeatedWord(text)
 * - Returns the first word (string) that appears more than once when scanning left-to-right
 * - If no repeated word found, returns null
 */
function firstRepeatedWord(text) {
  const words = tokenize(text);
  const seen = new Set();
  for (const w of words) {
    if (seen.has(w)) return w;
    seen.add(w);
  }
  return null;
}

