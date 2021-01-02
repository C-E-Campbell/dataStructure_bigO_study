const { performance } = require('perf_hooks');

const nemo = ['nemo', 'dory', 'a', 'b', 'c', 'd'];
const large = new Array(1000).fill('nemo');

function findNemo(arr) {
  const t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'nemo') {
      console.log('Found Nemo');
    }
  }
  const t1 = performance.now();
  console.log(t1 - t0);
}

findNemo(large);
