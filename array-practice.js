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
  let diff = []

  arr.forEach(el => {
    diff.push(target - el)
    if (arr.includes(diff)) {
      return true
    }
  })
  return false
};

// const arr = [4, 2, 3, 6, 9];
// console.log(twoSum(arr, 10)); // => True

// const arr2 = [4, 2, 3, 6, 9];
// console.log(twoSum(arr2, 16)); // => False

const secondLargest = arr => {

  let sorted = arr.sort()
  return sorted[arr.length -2]

};

// const arr = [4, 2, 3, 6, 8];
// console.log(secondLargest(arr)); // => 6

const shuffle = (arr) => {
  let res = []

  arr.forEach(num => {
    res.push(Math.floor(Math.random() * num))
  })
  console.log(res)

};

const arr = [2, 5, 1, 3, 4, 7];
console.log(shuffle(arr)); // => [2, 3, 5, 4, 1, 7]


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
