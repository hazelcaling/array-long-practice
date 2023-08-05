const findMinimum = arr => {

  // Your code here

};

const runningSum = arr => {

  const final = [];

    arr.reduce((prev, next) => {
        const sum = prev + next;
        final.push(sum);
        return sum;
    }, 0);

    return final;
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