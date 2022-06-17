function main(input) {
  const [n,s] = input.split("\n");
  
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const w = s[i];
    if(w === "(") depth++;
    if(w === ")") depth--;
    if(depth < 0) {
      console.log("No");
      return;
    }
  }

  if (depth === 0) console.log("Yes");
  else console.log("No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));


