function main(input) {
  let [acost, bcost, abcost, targetX, targetY] = input
    .split(" ")
    .map((e) => parseInt(e));

  let minCost = undefined;
  const times = Math.max(targetX, targetY) * 2;
  for (let ab = 0; ab <= times; ab += 2) {
    const x = Math.max(0, targetX - ab);
    const y = Math.max(0, targetY - ab);

    let total = ab * abcost * 2;
    total += x * acost;
    total += y * bcost;

    if (minCost === undefined) minCost = total;
    minCost = Math.min(minCost, total);
  }
  console.log(minCost);
}

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main("1500 2000 1600 3 2");
main("1500 2000 1900 3 2");
main("1500 2000 500 90000 100000");
