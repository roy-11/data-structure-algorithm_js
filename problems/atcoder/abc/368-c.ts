function main(input: string) {
  const newInput = input.trim();
  const [_nString, aString] = newInput.split("\n");
  const A = aString.split(" ").map(Number);

  const T = calculateT(A);
  console.log(T.toString());
}

function calculateT(A: number[]): number {
  let T = 0;

  for (let a of A) {
    const num = Math.floor(a / 5);
    T += num * 3;
    a = a % 5;

    // 数回程度であればループ可能
    while (a > 0) {
      T += 1;
      if (T % 3 === 0) {
        a -= 3;
      } else {
        a -= 1;
      }
    }
  }

  return T;
}
main(require("fs").readFileSync(__dirname + "/input", "utf8"));
