function createCarpet(n: number) {
  if (n === 0) {
    return ["#"];
  }

  const prevCarpet = createCarpet(n - 1);
  const size = prevCarpet.length;
  const newCarpet: string[] = [];

  for (let i = 0; i < 3 * size; i++) {
    if (Math.floor(i / size) === 1) {
      newCarpet.push(
        prevCarpet[i % size] + ".".repeat(size) + prevCarpet[i % size],
      );
    } else {
      newCarpet.push(prevCarpet[i % size].repeat(3));
    }
  }

  return newCarpet;
}

function main(input: string) {
  const n = Number(input.trim());
  const carpet = createCarpet(n);
  carpet.forEach((line) => console.log(line));
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
