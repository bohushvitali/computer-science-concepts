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

/*
// Start with an unsorted array
[95, 93, 36, 74, 33]

// Place them in the appropriate buckets for the least significant digit
{3: [93, 33], 4: [74], 5: [95], 6: [36]}
// And extract them back into an array
[93, 33, 74, 95, 36]

// Repeat for the next significant digit
{3: [33, 36], 4: [43], 7: [74], 9: [93, 95]}
// And we're Sorted!
[33, 36, 43, 74, 93, 95]
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