function main(input) {
  let [_, nums] = input.split("\n");
  nums = nums.split(" ").map((e) => parseInt(e));

  let [a, b, c, d] = [0, 0, 0, 0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 100) a++;
    if (nums[i] === 200) b++;
    if (nums[i] === 300) c++;
    if (nums[i] === 400) d++;
  }

  const ad = a * d;
  const bc = b * c;
  console.log(ad + bc);
}

main("5\n100 300 400 400 200");
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
