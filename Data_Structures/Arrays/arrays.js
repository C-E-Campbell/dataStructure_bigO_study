class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length += 1;
    return this.length;
  }
  pop() {
    if (this.length === -1) {
      return;
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.length;
  }
}

const arr = new MyArray();
arr.push('charlie');
arr.push('charlie');
arr.push('sean');
arr.push('charlie');
arr.pop();
console.log(arr);
