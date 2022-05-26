function main(input) {
  let [_, nums] = input.split("\n");
  nums = nums.split(" ").map((e) => parseInt(e));

  let [red, yellow, blue] = [0, 0, 0];
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 1) red++;
    if (nums[i] === 2) yellow++;
    if (nums[i] === 3) blue++;
  }

  const kumiawase = (num) => {
    return (num * (num - 1)) / 2;
  };

  console.log(kumiawase(red) + kumiawase(yellow) + kumiawase(blue));
}

main("6\n1 3 2 1 1 2");
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
