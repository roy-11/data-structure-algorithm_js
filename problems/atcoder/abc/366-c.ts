function main(input: string) {
  const newInput = input.trim();
  const [_qstring, ...arr] = newInput.split("\n");

  const hukuro: { [x: number]: number } = {};
  const set: Set<number> = new Set();
  for (let i = 0; i < arr.length; i++) {
    const [queryNum, x] = arr[i].split(" ").map(Number);

    if (queryNum === 1) {
      if (hukuro[x]) {
        hukuro[x]++;
      } else {
        hukuro[x] = 1;
        set.add(x);
      }
    }

    if (queryNum === 2) {
      if (hukuro[x]) {
        hukuro[x]--;
        if (hukuro[x] === 0) {
          set.delete(x);
        }
      }
    }

    if (queryNum === 3) {
      console.log(set.size);
    }
  }
}

function countValidPoints(N, D, points) {
  let count = 0;

  // 全ての可能な座標を調べる
  for (let x = -D; x <= D; x++) {
    for (let y = -D; y <= D; y++) {
      let totalDistance = 0;

      // 各点からのマンハッタン距離の合計を計算
      for (let i = 0; i < N; i++) {
        totalDistance +=
          Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
      }

      // 条件を満たすかチェック
      if (totalDistance <= D) {
        count++;
      }
    }
  }

  return count;
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
