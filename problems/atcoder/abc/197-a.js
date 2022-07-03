function main(input) {
  const s = input[1] + input[2] + input[0];  
  console.log(s);
}

main(require("fs").readFileSyc("/dev/stdin", "utf8"));n
