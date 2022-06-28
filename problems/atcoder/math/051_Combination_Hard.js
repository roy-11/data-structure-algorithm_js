function main(input) {
  const [x,y] = input.split(" ").map(Number);
  const mod = 10 ** 9 + 7;

  let bunshi = 1;
  let bunbo = 1;
  for(let i = 1; i <= x + y; i++) bunshi = (bunshi * i) % mod;
  for(let i = 1; i <= x; i++) bunbo = (bunbo * i) % mod;
  for(let i = 1; i <= y; i++) bunbo = (bunbo * i) % mod;
  
  console.log(division(bunshi,bunbo,mod))
}

function division(a,b,mod){
  return Number((BigInt(a) * BigInt(modpow(b,mod-2,mod)) % BigInt(mod)).toString(10));
}

function modpow(a,b,mod){
  let answer = 1n;
  let current = BigInt(a);
  const binary = b.toString(2);
  const reverseBinary = binary.split("").reverse().join("")
  
  for(let i = 0; i < 30; i++){
    if(reverseBinary[i] !==  undefined && reverseBinary[i] !== "0") {
       answer = (answer * current) % BigInt(mod);
    }
  	current = (current * current) % BigInt(mod);
  }
  
  return Number(answer.toString(10));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
n
