function main(input) {
  let [N, M, X, T, D] = input.trim().split(" ").map(Number);

  const TbyAge = [];
  let Height = T;
  for (let i = N; i >= 0; i--) {
    if (i < X) {
      Height -= D;
    }
    TbyAge[i] = Height;
  }

  console.log(TbyAge[M]);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

function main2(input) {
  let [_, M, X, T, D] = input.trim().split(" ").map(Number);

  if (M >= X) console.log(T);
  else console.log(T - (X - M) * D);
}

main2(require("fs").readFileSync("/dev/stdin", "utf8"));
