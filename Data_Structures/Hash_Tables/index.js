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
    this.data[hash] = value;
    return;
  }

  get(key) {
    const hash = this._hash(key);
    return this.data[hash];
  }
}

const table = new HashTable(50);
table.set('grape', 10000);
console.log(table.get('grape'));
