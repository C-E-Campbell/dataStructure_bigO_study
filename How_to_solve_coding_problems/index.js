// Given 2 arrays, create a function that let's a user know (true/flase) whether these
// these two arrays contain any common items

const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['z', 'c', 'i'];

function arrayChecker(arr1, arr2) {
  const checker = {};

  for (let i = 0; i < arr1.length; i++) {
    checker[arr1[i]] = arr1[i];
  }

  for (let j = 0; j < arr2.length; j++) {
    if (checker.hasOwnProperty(arr2[j])) {
      return false;
    }
  }
  return true;
}

// O(m + n)

console.log(arrayChecker(array1, array2));
