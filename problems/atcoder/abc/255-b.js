function main(input) {
  let [nk, lights, ...people] = input.trim().split("\n");
  let [n, k] = nk.split(" ").map(Number);
  
  const lightHashMap = {};
  lights.split(" ").forEach(e => {
    lightHashMap[e-1] = true;
  });
  
  const lightsPeople = [];
  const targetPeople = [];
  people.map((e,i) => {
    const xy = e.split(" ").map(Number);
    
    if(lightHashMap[i]) lightsPeople.push(xy);
    else targetPeople.push(xy)
  })
  
  
  const distance = [];
  for(let i = 0; i < targetPeople.length; i++){
    const targetP = targetPeople[i];
    let min = undefined;
    for(let j = 0; j < lightsPeople.length; j++){
      const lightsP = lightsPeople[j]
      const dx = Math.abs(targetP[0] - lightsP[0]); 
      const dy = Math.abs(targetP[1] - lightsP[1]);
      
      const d = Math.sqrt(dx * dx + dy * dy)
      if(min === undefined) min = d;
      min = Math.min(min,d)
    }
    
    distance.push(min)
  }
  
  const max = distance.reduce((max, e) => Math.max(max,e));
  console.log(max)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));1
