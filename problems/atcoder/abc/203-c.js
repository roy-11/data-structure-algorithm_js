function main(input) {
  let [NK, ...AB] = input.trim().split("\n");
  [N,K] = NK.split(" ").map(BigInt)
  AB = AB.map(e => e.split(" ").map(BigInt))

  const sortedAB = AB.sort((a, b) => (a[0] < b[0]) ? -1 : ((a[0] > b[0]) ? 1 : 0))

  let mati = K;
  for(let i = 0; i < sortedAB.length; i++){
    if(sortedAB[i][0] <= mati) mati += sortedAB[i][1];
  }
  console.log(mati.toString(10))
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
