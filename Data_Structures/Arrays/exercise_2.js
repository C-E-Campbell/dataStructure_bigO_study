// merge 2 sorted arrays

function merge(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  return merged.sort();
}
const merged = merge([1, 4, 6, 8, 6], [2, 3, 5, 9]);
for (let i = 0; i < merged.length; i++) {
  console.log(merged[i]);
}
