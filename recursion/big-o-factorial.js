let callTimes = 0;
function nFacRuntimeFunc(num) {
  if (num === 0) return "done";

  callTimes += 1;
  console.count(num);
  for (let i = 0; i < num; i++) {
    nFacRuntimeFunc(num - 1);
  }
}
nFacRuntimeFunc(3);
console.log(callTimes);
