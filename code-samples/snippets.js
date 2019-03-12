/**
 */
const linearSearch = (array, toFind) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === toFind) return i;
  }
  return -1;
}

/**
 */
const binarySearch = (arr, val, start = 0, end = arr.length - 1) => {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] > val) return binarySearch(arr, val, start, mid - 1);
  if (arr[mid] < val) return binarySearch(arr, val, mid + 1, end);
  return mid;
};

binarySearch([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 6); // 2
binarySearch([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 21); // -1

/**
 */
const bubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let change = false;
    for (let j = 0; j < arr.length - (i + 1); j++) {
      if (arr[j] > arr[j + 1]) {
        change = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!change) break;
  }
  return arr;
};

/**
 */
const quickSort = arr => {
  if (arr.length < 2) return arr;

  const pivot = arr[Math.floor(Math.random() * arr.length)];

  let left = [];
  let equal = [];
  let right = [];

  for (let element of arr) {
    if (element > pivot) right.push(element);
    else if (element < pivot) left.push(element);
    else equal.push(element);
  }

  return quickSort(left)
    .concat(equal)
    .concat(quickSort(right));
};

/**
 */
const radixSort = arr => {
  const maxNum = Math.max(...arr) * 10;
  let divisor = 10;

  while (divisor < maxNum) {
    let buckets = [...Array(10)].map(() => []);

    for (let num of arr) {
      buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
    }

    arr = [].concat.apply([], buckets);
    divisor *= 10;
  }
  return arr;
};

/**
 */
const benchmark = arr => {
  arr = arr
    ? arr
    : [...Array(1000)].map(() => Math.floor(Math.random() * 1000));

  const versions = [
    { arr: [...arr], title: "Random" },
    { arr: [...arr.sort((a, b) => a - b)], title: "Sorted" },
    { arr: [...arr.reverse()], title: "Reversed" },
    { arr: new Array(1000).fill(8), title: "Equal" }
  ];

  const sorts = [
    { func: bubbleSort, title: "Bubble" },
    { func: quickSort, title: "Quick" },
    { func: radixSort, title: "Radix" }
  ];

  for (let { arr, title } of versions) {
    console.log(`\n${title} Data`);
    console.log("*******************************");
    for (let { func, title } of sorts) {
      const before = Date.now();
      for (let i = 0; i < 1000; i++) {
        func([...arr]);
      }
      console.log(`${title} Sort: ${(Date.now() - before) / 1000}sec`);
    }
  }
};

benchmark();

/**
 */

/* Fibonacci - While loop. Time complexity: O(N) Space complexity: Constant Function calls: 51 Time needed: 0.000001ms */
const fibonacciWhileLoop = num => {
  var a = 1, b = 0, temp;
  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}

/* Fibonacci - Recursion. Time complexity: O(2^N) Space complexity: O(n) Function calls: 20.365.011.074 Time needed: 176.742ms */
const fibonacciRecursion = num => {
  if (num <= 1) return 1;
  return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2)
}

/* Fibonacci - Memoization. Time complexity: O(2N) Space complexity: O(n) Function calls: 99 Time needed: 0.000001ms */
const fibonacci = (num, memo) => {
  memo = memo || {};
  if (memo(num)) return memo[num];
  if (num <= 1) return 1;
  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}

/* Celsius to Fahrenheit temperature conversion. Follows the conversion formula `F =  1.8C + 32`. */
const celsiusToFahrenheit = degrees => 1.8 * degrees + 32;
celsiusToFahrenheit(33) // 91.4

/* Fahrenheit to Celsius temperature conversion. Follows the conversion formula `C = (F - 32) * 5/9`. */
const fahrenheitToCelsius = degrees => (degrees - 32) * 5/9;
fahrenheitToCelsius(32); // 0

/* Removes any properties except the ones specified from a JSON object.
   Use `Object.keys()` method to loop over given JSON object and deleting keys that are not included in given array.
   If you pass a special key,`childIndicator`, it will search deeply apply the function to inner objects, too.
*/

const cleanObj = (obj, keysToKeep = [], childIndicator) => {
  Object.keys(obj).forEach(key => {
    if (key === childIndicator) {
      cleanObj(obj[key], keysToKeep, childIndicator);
    } else if (!keysToKeep.includes(key)) {
      delete obj[key];
    }
  });
  return obj;
};

const testObj = { a: 1, b: 2, children: { a: 1, b: 2 } };
cleanObj(testObj, ['a'], 'children'); // { a: 1, children : { a: 1}}