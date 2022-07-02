function main(input) {  
  console.log(String.fromCharCode(input));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
