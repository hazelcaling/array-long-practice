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

    arr.reduce((prev, next) => {
        const sum = prev + next;
        res.push(sum);
        return sum;
    }, 0);

    return res
  };

//   const arr = [1,2,3,4]; 
// console.log(runningSum(arr))

const evenNumOfChars = arr => {
  let count = 0;
  arr.forEach(el => {
    if (el.length % 2 === 0) count++

  });
  return count
};

// const arr = ['ab', 'abc', 'a', 'abcd']; 
// console.log(evenNumOfChars(arr))

const smallerThanCurr = arr => {

  

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
