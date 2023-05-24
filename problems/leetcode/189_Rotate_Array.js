var rotate = function (nums, k) {
  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let j = k - 1; j >= 0; j--) {
    nums[j] = nums.pop();
  }

  return nums;
};

function rotate2(nums, k) {
  const loopTimes = k % nums.length;
  for (let i = 0; i < loopTimes; i++) {
    nums.unshift(nums.pop());
  }

  return nums;
}

function rotate3(nums, k) {
  const loopTimes = k % nums.length;
  const removed = nums.splice(nums.length - loopTimes);
  nums.splice(0, 0, ...removed);

  return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate3([1, 2, 3, 4, 5, 6, 7], 3));
