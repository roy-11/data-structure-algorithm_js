function main(input) {
  let [length, nums] = input.split("\n");
  length = parseInt(length);
  nums = nums.split(" ").map((e) => parseInt(e));

  let count = 0;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        for (let l = k + 1; l < length; l++) {
          for (let m = l + 1; m < length; m++) {
            const total = nums[i] + nums[j] + nums[k] + nums[l] + nums[m];
            if (1000 === total) count++;
          }
        }
      }
    }
  }
  console.log(count);
}

main("5\n100 150 200 250 300");
main("13\n243 156 104 280 142 286 196 132 128 195 265 300 130");
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
