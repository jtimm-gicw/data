// leftJoin.js

// normalizeToObject: accepts a plain object or a Map and returns a plain object.
// single responsibility: just convert Map -> object, or validate object input.
function normalizeToObject(mapLike) {
  if (mapLike instanceof Map) {
    const obj = {};
    for (const [k, v] of mapLike.entries()) obj[k] = v;
    return obj;
  }
  if (mapLike && typeof mapLike === 'object') {
    // assume plain object already
    return { ...mapLike };
  }
  throw new TypeError('Input must be a Map or a plain object');
}

// leftJoin: accepts two hashmaps (object or Map).
// Returns an array of arrays: [ [key, leftValue, rightValueOrNull], ... ]
function leftJoin(leftMap, rightMap) {
  const leftObj = normalizeToObject(leftMap);
  const rightObj = normalizeToObject(rightMap);

  const result = [];

  // iterate only keys from leftObj (LEFT JOIN behavior)
  for (const key of Object.keys(leftObj)) {
    const leftVal = leftObj[key];
    // if right has it, get it; otherwise null
    const rightVal = Object.prototype.hasOwnProperty.call(rightObj, key)
      ? rightObj[key]
      : null;
    result.push([key, leftVal, rightVal]);
  }

  return result;
}

// Export for use in tests or other modules
module.exports = { normalizeToObject, leftJoin };
