// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Drop it</h1>`;

/**
 * Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
 *
 * Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 * 
 * The below solution does not meet the requirement:
 * function dropElements(arr, func) {
  const ret = arr.map(func);
  // ret is same as below:
  // const ret1 = arr.map((n) => {
  //   return func(n);
  // });
  
    const retArr = [];
    for (let i = 0; i < ret.length; i++) {
      if (ret[i]) {
        retArr.push(arr[i]);
      }
    }
    return retArr;
  }
 * The requirement clearly states: 
  ... Then return the rest of the array once the condition is satisfied otherwise, ...
 */

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  })
);
console.log(
  dropElements([(1, 2, 3, 4)], function (n) {
    return n >= 3;
  })
);
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
);
console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  })
);
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  })
);
console.log(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  })
);
console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  })
);
