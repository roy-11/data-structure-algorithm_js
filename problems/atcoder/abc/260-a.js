function main(input) {
  const S = input.trim();

  const map = {};
  for(let i = 0; i < 3; i++){
    const si = S[i];
    if(map[si]) map[si]++;
    else map[si] = 1;
  }

  for(let key in map){
    if(map[key] === 1) return console.log(key)
  }
  console.log("-1")
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
