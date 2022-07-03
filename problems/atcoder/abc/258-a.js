function main(input) {
  const k = Number(input.trim());
  const over60 = k >= 60;
  
  const hour = over60 ? 22 : 21; 
  const minutes = over60 ? k - 60 : k; // 余りを取る形の方が良い
  const ketaMinutes = minutes.toString().length === 1 ? `0${minutes}` : minutes;
  
  console.log(`${hour}:${ketaMinutes}`)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

function main(input) {
  input = input.trim().split('\n');
  let k = parseInt(input[0]);
  
  let h = 21 + Math.floor(k / 60);
  let m = ('0' + (k % 60)).slice(-2);
  console.log(h +':'+ m);
  
  
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));



function main(input) {
  const k = Number(input.trim());
  const minutes = k;
  const startTime = new Date('2022/01/01 21:00').getTime();
  
  const date = new Date(startTime + (1000 * 60 * minutes));
  console.log(`${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));


function main(input) {
  input = input.trim().split("\n");
  let K = Number.parseInt(input[0]);
  let d = new Date();
  d.setHours(21);
  d.setMinutes(00);
  d.setMinutes(d.getMinutes() + K);
  console.log(d.getHours().toString().padStart(2, '0') + ":" + d.getMinutes().toString().padStart(2, '0'));
}
