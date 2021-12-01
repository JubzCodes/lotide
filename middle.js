
const middle = function (arr) {
  if (arr.length <= 2) {
    return [];
  }
  const mid1 = Math.floor(arr.length / 2);
  value = arr[mid1];
  if (arr.length % 2 !== 0) {
    return [value];
  }
  const mid2 = Math.floor(arr.length / 2) - 1;
  value2 = arr[mid2];
  return [value2, value];
}

module.exports = middle;