// https://atcoder.jp/contests/sumitrust2019/tasks/sumitb2019_d

function main(input) {
  let [length, nums] = input.split("\n");
  length = parseInt(length);

  for (let i = 0; i < 1000; i++) {
    const pin = [
      Math.floor((i / 100) % 10),
      Math.floor((i / 10) % 10),
      Math.floor(i % 10),
    ];
    let pinIndex = 0;

    for (let j = 0; j < length; j++) {
      if (parseInt(nums[j]) === pin[pinIndex]) match++;
      if (pinIndex === 3) break;
    }
    if (pinIndex === 3) count++;
  }
  console.log(pinIndex);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
