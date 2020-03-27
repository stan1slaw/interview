// Code Interview on Javascript

// 1st

// write an object
// it has two functions
// bind
//     you can bind an object to it, with an event name and a callback
// trigger
//     if you can trigger with an event name, then all objects that bound with this eventname
//     will be triggered/called with the callback


// 2nd

// [
//   [0, 0, 1, 1],
//   [0, 1, 1, 0],
//   [1, 1, 1, 1],
//   [0, 1, 1, 0]
// ]

// N * M

// Uint8Array      00000000 - 11111111 => 0 - 255
// 00110110 => 2 + 4 + 16 + 32 = 54
// 11110110 => 255 - 1 - 8 = 246
// [54, 246]

// N & M not always equal

// [
//   [1, 1, 0, 0],
//   [0, 1, 1, 0],
//   [0, 0, 1, 1]
// ]
// 3 * 4

// 3d
// Write a function that makes matrix of 1 and 0 from an array (reverse task)


// My Solution (Kate Volkova)
// you are given a binary 2D array with dimensions N * M

// [
//   [1, 1, 0, 0],
//   [0, 1, 1, 0],
//   [0, 0, 1, 1]
// ]
// 3 * 4

const matrix = [
  [0, 0, 1, 1],
  [0, 1, 1, 0],
  [1, 1, 1, 1]
];

/* current is 0
<< current 32 bits: 00..00
current to be 01101100
*/

const LENGTH = 8;

const binaryToUint8Array = (matrix) => {
  const width = matrix[0].length;
  const height = matrix.length;

  let current = 0;
  let bitsCount = 0;
  const resultArray = [];

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      // reversed 8bits using left shift
      current = current | matrix[i][j] << bitsCount;
      // reversed 8bits using right shift
      // current = current >> 1;
      // current = current | (matrix[i][j] << LENGTH - 1);
      // straight 8bits with left shift
      // current = current << 1;
      // current = current | matrix[i][j];
      bitsCount++;
      if (bitsCount === LENGTH) {
        resultArray.push(current);
        current = 0;
        bitsCount = 0;
      }
    }
  }
  if (current) {
    // straight 8bits with left shift
    // current = current << LENGTH - bitsCount;
    // reversed 8bits with right shift
    // current = current >> LENGTH - (bitsCount + 1);
    // reversed 8bits with left shift just push
    resultArray.push(current);
  }

  return resultArray;
}


// num = 54 = 00110110
// & 1

const uint8ArrayToMatrix = (array) => {
  let result = [];
  let buffer = [];
  array.forEach(num => {
    // straigh 8bits
    for (let i = 0; i < LENGTH; i++) {
      /* buffer.push(num & 1) */;
      buffer.unshift(num & 1);
      num = num >> 1;
    }
    result = result.concat(buffer.reverse());
    buffer = [];
    // reversed 8bits with left shift
  });

  return result;
}

const array = binaryToUint8Array(matrix);
console.log(array);
console.log(uint8ArrayToMatrix(array));

// 5th

// you are given a binary tree, each node contains a number
// you are given a target K
// we want to find a path from the tree's root to a leaf node, such that the numbers sum up to be the target K

//     4
//    / \
//   8   9
//  / \   \
// 5  3    4

// K = 15
// 4 -> 8 -> 3 = 15   true
// true or false if you can find such path

// K = 13
// false
// root -> middle -> ... -> leaf


