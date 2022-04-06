function fibonacciIterative(n) {
  const fibonacciNumbers = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
  }

  // if (n < 1) return fibonacciNumbers[n];

  // while (!fibonacciNumbers[n]) {
  //   fibonacciNumbers.push(
  //     fibonacciNumbers[fibonacciNumbers.length - 1] +
  //       fibonacciNumbers[fibonacciNumbers.length - 2]
  //   );
  // }

  return fibonacciNumbers[n];
}

console.log(fibonacciIterative(0));
console.log(fibonacciIterative(1));
console.log(fibonacciIterative(8));

function fibonacciRecursive(n) {
  const fibonacciNumbers = [0, 1];
  if (n === 0) return fibonacciNumbers[0];
  if (n === 1) return fibonacciNumbers[1];

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log(fibonacciRecursive(0));
// console.log(fibonacciRecursive(1));
console.time();
console.log(fibonacciRecursive(30));
console.timeEnd();
