const string = ['a', 'b', 'c', 'd'];

//push O(1)
string.push('e');

//pop O(1)
string.pop();

//unshift O(n)
string.unshift('x');

//splice O(n)
string.splice(2, 0, 'y');

console.log(string);
