function main(input) {
  let [n, ...lr] = input.trim().split("\n");
  n = Number(n);
  lr = lr.map((e) => e.split(" ").map(Number)).sort((a, b) => a[0] - b[0]);

  const pairs = [];

  let min = lr[0][0];
  let max = lr[0][1];
  for (let i = 1; i < n; i++) {
    if (max < lr[i][0]) {
      // maxより大きいと途切れる
      pairs.push([min, max]); // 途切れたら内容をペアに保存
      min = lr[i][0]; // 新しいペアにminとmaxを更新
      max = lr[i][1]; // 新しいペアにminとmaxを更新
    }
    min = Math.min(min, lr[i][0]); // 多分これいらない　ソートされてる
    max = Math.max(max, lr[i][1]); // 限界値で大きいものが出たら更新
  }
  pairs.push([min, max]); // 最後のpushされてないペアをプッシュ
  pairs.forEach((pair) => {
    console.log(...pair);
  });
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
