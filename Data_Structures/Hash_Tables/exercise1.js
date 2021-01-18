const array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const array3 = [2, 3, 4, 5];

// o(n)

function checkForDuplicates(arr) {
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return `This is the duplicate => ${arr[i]}`;
    }
    mySet.add(arr[i]);
  }
  return;
}

console.log(checkForDuplicates(array));
console.log(checkForDuplicates(array2));
console.log(checkForDuplicates(array3));
