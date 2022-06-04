function main(input) {
  let num = parseInt(input);
  
  const cache = [0,1,2];
  for(let i = 3; i <= num; i++){
    cache.push(cache[i - 1] + cache[i - 2]);
  }
  
  console.log(cache[num]);
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
