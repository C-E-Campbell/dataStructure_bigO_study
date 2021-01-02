const { performance } = require('perf_hooks');

const nemo = ['nemo'];

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

findNemo(nemo);
