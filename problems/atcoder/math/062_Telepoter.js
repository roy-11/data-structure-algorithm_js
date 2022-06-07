function main(input) {
  const inputs = input.split("\n");
  let [length, target] = inputs[0].split(" ");
  let teleports = inputs[1].split(" ").map(e => parseInt(e)); // 街のテレポート先

  length = parseInt(length);
  target = BigInt(target); 
  let count = 0; // 何ターン移動したか
  let current = 1;　// 現在いる街 1~length
  const first = new Array(length).fill(-1); // インデックスが街で、値が何ターン目で来たか（一周目）
  const second = new Array(length).fill(-1);　// インデックスが街で、値が何ターン目で来たか（二週目）

  while (true) {
    let nowTown = current - 1; // index調整（firstとsecondは０から始まるため）
    
    // 一週目と二週目（１週目が終了後）で、各街に何ターン目に来たかを記録する
    if(first[nowTown] === -1) first[nowTown] = count;
    else if(second[nowTown] === -1) second[nowTown] = count;
    
    // その目的のターンの時に、街にいるかどうか(ここで街ごとに何ターンで来たかが必要)
    const secondCount = target - BigInt(first[nowTown]);
    const length = second[nowTown] - first[nowTown];
    const isTown　= secondCount % BigInt(length) === 0n;
    
    // 一週目：ターン数が目的の数になったら現在いる街を出力する
    if (BigInt(count) === target) {
      console.log(current);
      return;
    // 二週目: その目的のターンの時に街にいる場合に、現在いる街を出力する
    }else if(second[nowTown] !== -1 && isTown){
      console.log(current)
      return;
    };
    
    current = teleports[nowTown];
    count++;
  };

}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
