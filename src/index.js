module.exports = function towelSort (matrix) {
  return (matrix || []).map((arr, i) => i%2? arr.reverse() : arr).flat();
}
