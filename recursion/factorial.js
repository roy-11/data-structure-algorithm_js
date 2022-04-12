function findFactorialRecursive(number) {
  if (number <= 2) return number;
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  if (number <= 2) return number;

  let answer = 1;
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }

  return answer;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(2));
console.log(findFactorialRecursive(2));
console.log(findFactorialIterative(1));
console.log(findFactorialRecursive(1));
console.log(findFactorialIterative(0));
console.log(findFactorialRecursive(0));
console.log(findFactorialIterative(3));
console.log(findFactorialRecursive(3));
