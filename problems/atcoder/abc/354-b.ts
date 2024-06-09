function main(input: string) {
  const newInput = input.trim();
  const [all, ...rest] = newInput.split("\n");
  const userWithPoint = rest.map((x) => x.split(" "));

  let point = 0;
  userWithPoint.forEach(([_, p]) => {
    point += Number(p);
  });

  // @ts-ignore
  userWithPoint.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  });

  const mod = point % Number(all);
  console.log(userWithPoint[mod][0]);
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
