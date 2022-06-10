function main(input) {
  const [h,w] = input.split(" ").map(e => BigInt(e));
  const area = h * w;
  
  if(h === 1n || w === 1n) {
     console.log(1);
     return;
  }
  
  if(area % 2n === 0n){
    console.log((area / 2n).toString(10));
  }else{
    console.log((area / 2n + 1n).toString(10));
  }
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
