function main(input) {
  const [a,b,c,d] = input.split(" ").map(BigInt);
  const max = [a*c,a*d,b*c,b*d].reduce((preBigger, ope) => preBigger > ope ? preBigger : ope);
  console.log(max.toString(10));
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
