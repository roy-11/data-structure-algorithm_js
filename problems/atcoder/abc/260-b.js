function main(input) {
  let [NXYZ, A, B] = input.trim().split("\n");
  let [N, X, Y, Z] = NXYZ.split(" ").map(Number);
  A = A.split(" ").map(Number);
  B = B.split(" ").map(Number);

  let list = [];
  for (let i = 0; i < N; i++) {
    list[i] = [A[i], B[i], i + 1];
  }

  const gokaku = [];

  // math
  const sortedMath = list.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    return b[2] - a[2];
  });
  for (let i = 0; i < X; i++) {
    gokaku.push(sortedMath.pop());
  }

  // en
  const sortedEn = sortedMath.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return b[2] - a[2];
  });
  for (let i = 0; i < Y; i++) {
    gokaku.push(sortedEn.pop());
  }

  // total
  const sortedTotal = sortedEn.sort((a, b) => {
    const totalA = a[0] + [1];
    const totalB = b[0] + b[1];
    if (totalA !== totalB) return totalA - totalB;
    return b[2] - a[2];
  });
  for (let i = 0; i < Z; i++) {
    gokaku.push(sortedTotal.pop());
  }

  // gokaku
  const sortedGokaku = gokaku.sort((a, b) => a[2] - b[2]);
  for (let i = 0; i < sortedGokaku.length; i++) {
    console.log(sortedGokaku[i][2]);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
