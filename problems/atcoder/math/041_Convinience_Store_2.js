function main(input) {
  let [T, N, ...LRs] = input.trim().split("\n");
  T = Number(T);
  N = Number(N);
  LRs = LRs.map((e) => e.split(" ").map(Number));

  const numByT = new Array(T).fill(0);
  for (let i = 0; i < N; i++) {
    const start = LRs[i][0];
    const end = LRs[i][1];

    numByT[start] += 1;
    numByT[end] -= 1;
  }

  let count = 0;
  for (let i = 0; i < T; i++) {
    count += numByT[i];
    console.log(count);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
