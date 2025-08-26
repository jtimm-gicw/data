
// Movie objects

// Each movie has a title, release year, and list of genres.
// Sorting by year and by title.
const movies = [
  { title: "Star Wars: A New Hope", year: 1977, genres: ["Sci-Fi", "Adventure"] },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, genres: ["Fantasy", "Adventure"] },
  { title: "The Matrix", year: 1999, genres: ["Action", "Sci-Fi"] },
  { title: "Terminator 2: Judgment Day", year: 1991, genres: ["Action", "Sci-Fi"] },
  { title: "Robin Hood: Men in Tights", year: 1993, genres: ["Comedy", "Parody"] },
  { title: "Fight Club", year: 1999, genres: ["Drama", "Thriller"] },
  { title: "Pulp Fiction", year: 1994, genres: ["Crime", "Drama"] },
  { title: "The Big Lebowski", year: 1998, genres: ["Comedy", "Cult Classic"] },
];

// Sort by most recent year first

// This function compares two movies based on their "year" property.
// It subtracts years so that newer movies (b.year) appear before older ones (a.year).
// Returning a positive number means "a should come after b".
// Returning a negative number means "a should come before b".
function compareByYear(a, b) {
  return b.year - a.year; // newer movies first
}

// Sort alphabetically by title
// but ignore "A", "An", "The" at the beginning
// We don't want "The" or "A" to affect sorting order.
function compareByTitle(a, b) {
  // Helper function: removes leading "A ", "An ", or "The " (case-insensitive)
  const cleanTitle = (title) => title.replace(/^(A |An |The )/i, "");

  // localeCompare is built into JavaScript, and sorts strings alphabetically
  return cleanTitle(a.title).localeCompare(cleanTitle(b.title));
}

// The .sort() function takes a comparator function.
// We use [...movies] to make a copy so we don’t change the original array.

console.log("🎬 Sorted by Year (Most Recent First):");
console.log([...movies].sort(compareByYear));

console.log("\n🎬 Sorted by Title (Ignoring A/An/The):");
console.log([...movies].sort(compareByTitle));

// ----------------------------------------------------------------------------
// Tests for Comparator Functions

function testComparators() {
  const m1 = { title: "The Matrix", year: 1999 };
  const m2 = { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 };

  // Test compareByYear
  console.log("\n🧪 Testing compareByYear...");
  console.log("compareByYear(m1, m2):", compareByYear(m1, m2));
  // Expect > 0 because LOTR (2001) is newer than The Matrix (1999)

  // Test compareByTitle
  console.log("\n🧪 Testing compareByTitle...");
  console.log("compareByTitle(m1, m2):", compareByTitle(m1, m2));
  // After ignoring "The", we compare "Matrix" vs "Lord of the Rings"
  // "L" comes before "M", so result should be negative (< 0)
}

testComparators();
