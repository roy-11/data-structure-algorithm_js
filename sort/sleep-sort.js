// #!/bin/bash
// function f() {
//     sleep "$1"
//     echo "$1"
// }
// while [ -n "$1" ]
// do
//     f "$1" &
//     shift
// done
// wait

function sleepsort(nums) {
  return new Promise((resolve) => {
    let count = 0;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      setTimeout(() => {
        count++;
        result.push(num);
        if (count === nums.length) resolve(result);
      }, num);
    }
  });
}

sleepsort([3, 2, 1, 4, 6, 2, 7, 9, 8]).then(console.log);
