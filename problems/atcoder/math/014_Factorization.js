function main(input) {
  let num = parseInt(input);

  let sosu = "";
  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      num /= i;
      sosu = sosu + " " + i;
    }
  }
  if (num >= 2) sosu = sosu + " " + num;
  console.log(sosu);
}

main("10");
main("36");

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
