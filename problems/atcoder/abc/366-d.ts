function main(originInput: string) {
  const newInput = originInput.trim();
  const input = newInput.split("\n");

  // 入力の処理
  let index = 0;
  const N = parseInt(input[index++], 10);
  const A = new Array(N + 1)
    .fill(null)
    .map(() => new Array(N + 1).fill(null).map(() => new Array(N + 1).fill(0)));

  // A配列の初期化と累積和の計算
  for (let x = 1; x <= N; x++) {
    for (let y = 1; y <= N; y++) {
      const line = input[index++].split(" ").map(Number);
      for (let z = 1; z <= N; z++) {
        A[x][y][z] =
          line[z - 1] +
          A[x - 1][y][z] +
          A[x][y - 1][z] +
          A[x][y][z - 1] -
          A[x - 1][y - 1][z] -
          A[x - 1][y][z - 1] -
          A[x][y - 1][z - 1] +
          A[x - 1][y - 1][z - 1];
      }
    }
  }

  const Q = parseInt(input[index++], 10);
  const results: number[] = [];

  for (let i = 0; i < Q; i++) {
    const [Lx, Rx, Ly, Ry, Lz, Rz] = input[index++].split(" ").map(Number);

    let sum =
      A[Rx][Ry][Rz] -
      A[Lx - 1][Ry][Rz] -
      A[Rx][Ly - 1][Rz] -
      A[Rx][Ry][Lz - 1] +
      A[Lx - 1][Ly - 1][Rz] +
      A[Lx - 1][Ry][Lz - 1] +
      A[Rx][Ly - 1][Lz - 1] -
      A[Lx - 1][Ly - 1][Lz - 1];

    results.push(sum);
  }

  console.log(results.join("\n"));
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
