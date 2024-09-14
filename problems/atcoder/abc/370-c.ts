function main(input: string) {
  const newInput = input.trim();
  const [s, t] = newInput.split("\n");

  let newWord = s;
  const x: string[] = [];
  const stringLength = s.length;

  while (newWord !== t) {
    const tests: string[] = [];
    for (let i = 0; i < stringLength; i++) {
      if (newWord[i] === t[i]) {
        continue;
      }
      tests.push(newWord.slice(0, i) + t[i] + newWord.slice(i + 1));
    }
    newWord = tests.sort()[0];
    x.push(newWord);
  }

  console.log(x.length);
  x.forEach((word) => console.log(word));
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
