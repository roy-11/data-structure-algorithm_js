function memoizedFibonacciRecursive() {
  const cache = {};
  return function fibonacciRecursiveDP(n) {
    if (cache[n]) return cache[n];

    const fibonacciNumbers = [0, 1];
    if (n === 0) return fibonacciNumbers[0];
    if (n === 1) return fibonacciNumbers[1];

    cache[n] = fibonacciRecursiveDP(n - 1) + fibonacciRecursiveDP(n - 2);
    return cache[n];
  };
}

const memoized = memoizedFibonacciRecursive();

console.log(memoized(0));
console.log(memoized(1));
console.time();
console.log(memoized(40));
console.timeEnd();
