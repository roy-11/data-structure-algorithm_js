function main(input) {
  let [S, T] = input.trim().split("\n");

  const s = [];
  for (let i = 0; i < S.length; i++) {
    let chaS = S[i];
    let countS = 0;
    while (true) {
      countS++;
      if (S[i] !== S[i + 1]) break;
      i++;
    }
    s.push([chaS, countS]);
  }

  const t = [];
  for (let j = 0; j < T.length; j++) {
    let chaT = T[j];
    let countT = 0;

    while (true) {
      countT++;
      if (T[j] !== T[j + 1]) break;
      j++;
    }
    t.push([chaT, countT]);
  }

  if (s.length !== t.length) return console.log("No");
  for (let i = 0; i < s.length; i++) {
    const [chaS, countS] = s[i];
    const [chaT, countT] = t[i];

    if (chaS !== chaT) return console.log("No");
    if (countS > countT) return console.log("No");

    if (countS === countT) continue;
    if (countS <= 1) return console.log("No");
  }

  console.log("Yes");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
