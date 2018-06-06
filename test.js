// String functions
const string = 'Ho Nguyen Duy Nguyen is awesome! Nguyen is handsome too.';

function countCharacter(str, char) {
  return str.split(char).length - 1;
}

console.log(countCharacter(string, 'n'));

function countWord(str) {
  let s = str;
  s = s.replace(/(^\s*)|(\s*$)/gi, ''); // exclude  start and end white-space
  s = s.replace(/[ ]{2,}/gi, ' '); // 2 or more space to 1
  s = s.replace(/\n /, '\n'); // exclude newline with a start spacing
  return s.split(' ').length;
}

console.log(countWord(string));

function checkFirstName(str, w) {
  return (str.split(' ')[0] === w);
}

console.log(checkFirstName(string, 'Nguyen'));

function findWord(str, w) {
  const array = [];
  array[0] = str.indexOf(w);
  for (let i = 1; i < str.length; i += 1) {
    array.push(str.indexOf(w, array[i - 1] + 1));
    if (array[i] === -1) {
      array.pop();
      break;
    }
  }
  return array;
}

console.log(findWord(string, 'n'));

function replaceWord(str, w1, w2) {
  const a = findWord(str, w1).length;
  let result = str.replace(w1, w2);
  for (let i = 0; i < a; i += 1) {
    result = result.replace(w1, w2);
  }
  return result;
}

console.log(replaceWord(string, 'Nguyen', 'Quang'));

// Integer array functions
const integerArray = [1, 3, 2, 23, 0, -5, -8, 49];

function findMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
}

console.log(findMax(integerArray));

function findMin(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) min = array[i];
  }
  return min;
}

console.log(findMin(integerArray));

function countEven(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) result.push(array[i]);
  }
  return result;
}

console.log(countEven(integerArray));

console.log(integerArray.sort((a, b) => a - b));
console.log(integerArray.sort((a, b) => b - a));

// String array
const stringArray = ['abc', 'hello world', 'batman vs superman', 'harry potter and 40 thieves', 'asdfjkl;'];

console.log(stringArray.sort((a, b) => b.localeCompare(a))); // sort string descending

// Matrix

function fill2DArray(rows, columns) {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    arr.push([]);
    for (let j = 0; j < columns; j++) {
      arr[i][j] = (i * columns) + j;
    }
  }
  return arr;
}

const arr = fill2DArray(4, 4);

console.log(arr);
