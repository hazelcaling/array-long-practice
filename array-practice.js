const findMinimum = arr => {
  let smallest = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = i
    }
  }
  return smallest
};

// const arr = [7, 5, 2, 3, 4, 1];
// console.log(findMinimum(arr)); // => 1

const runningSum = arr => {
  let res = []

  arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);


};

const evenNumOfChars = arr => {

  // Your code here
};

const smallerThanCurr = arr => {

  // Your code here

};

const twoSum = (arr, target) => {

  // Your code here
};

const secondLargest = arr => {

  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
