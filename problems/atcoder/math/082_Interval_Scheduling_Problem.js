function main(input) {
  let [n, ...times] = input.trim().split("\n");
  times = times.map(e => e.split(" ").map(Number))
  
  const sortedTimes = times.sort((a,b) => a[1] - b[1]);
  let now = sortedTimes[0][1];
  let count = 1;
  
  for(let i = 1; i < sortedTimes.length; i++){
    const startTime = sortedTimes[i][0];
    const endTime = sortedTimes[i][1];
    if(startTime >= now) {
      now = endTime;
      count++;
    }
  }
   
  console.log(count);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));


