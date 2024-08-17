function main(input: string) {
  const newInput = input.trim();
  const [n, ...arr] = newInput.split("\n");

  const longest = arr.reduce<number>((acc, cur) => {
    if (cur.length > acc) return cur.length;
    return acc;
  }, 0);

  const array: string[][] = [];
  for (let i = 0; i < longest; i++) {
    array.push([]);
  }

  const max = arr.length - 1;
  arr.forEach((line, i) => {
    for (let j = 0; j < longest; j++) {
      if (line[j] === undefined) {
        if (array[j][max - i + 1]) {
          array[j][max - i] = "*";
        }
      } else {
        array[j][max - i] = line[j];
      }
    }
  });

  array.forEach((line) => {
    console.log(line.join(""));
  });
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
