function main(input) {
  let n = Number(input);
  
  let count = 0;
  while(n >= 10000) {
    n = n - 10000;
    count++;
  }
  
  while(n >= 5000) {
    n = n - 5000;
    count++;
  }
  
  while(n >= 1) {
    n = n - 1000;
    count++;
  }

  console.log(count);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
