function main1(input) {
  let [N, ...A] = input.trim().split(/ |\n/);
  N = Number(N);
  A = A.map(Number);

  let P = 0;
  let array = [0, 0, 0, 0];
  for (let i = 0; i < N; i++) {
    array[0] += 1;

    for (let j = 0; j < A[i]; j++) P += array.pop();
    for (let j = 0; j < A[i]; j++) array.unshift(0);
  }
  console.log(P);
}

main1(require("fs").readFileSync("/dev/stdin", "utf8"));

function main2(input) {
  let [N, ...A] = input.trim().split(/ |\n/);
  N = Number(N);
  A = A.map(Number);

  let array = [0, 0, 0, 0];
  for (let i = 0; i < N; i++) {
    array[array.length - 1] += 1;
    for (let j = 0; j < A[i]; j++) array.push(0);
  }

  let P = 0;
  for (let i = 0; i < array.length - 4; i++) {
    P += array[i];
  }
  console.log(P);
}

main2(require("fs").readFileSync("/dev/stdin", "utf8"));

function main3(input) {
  let [N, ...A] = input.trim().split(/ |\n/);
  N = Number(N);
  A = A.map(Number);

  let P = 0;
  let field = [0, 0, 0, 0];

  for (let i = 0; i < N; i++) {
    field[0] += 1;

    let shift = [0, 0, 0, 0]; // シフト用配列
    for (let j = 0; j < 4; j++) {
      if (j + A[i] >= 4)
        // インデックス＋A[i]が4以上はマスを超えるためPに加算・なくなるためシフト用配列には記載しない
        P += field[j];
      else shift[j + A[i]] = field[j]; // ４以下はシフト用配列にシフト結果を記入
    }
    // console.log(field)
    // console.log(shift)

    field = shift;
  }

  console.log(P);
}

main3(require("fs").readFileSync("/dev/stdin", "utf8"));
