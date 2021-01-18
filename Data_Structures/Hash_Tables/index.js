// let user = {
//   age: 54,
//   name: 'Kyle',
//   magic: true,
//   scream() {
//     console.log('Ahh');
//   },
// };

// user.age; //O(1);
// user.apell = 'abra kadabra'; //O(1);

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }

    this.data[hash].push([key, value]);

    return;
  }

  get(key) {
    const currentBucket = this._hash(key);

    if (currentBucket) {
      console.log('herer');
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i];
        }
      }
    }
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const table = new HashTable(50);
table.set('grape', 10000);
table.set('apple', 10000);
console.log(table.keys());
