function main(input) {
  const inputs = input.split("\n")
  const [length,target] = inputs[0].split(" ").map((i)=>parseInt(i,10));
  const nums = inputs[1].split(" ").map((i)=>parseInt(i,10));
  
  const list = new Array(length + 1);
  for(let i = 0; i < length + 1; i++){
    list[i] = new Array(target + 1).fill(false);
  }
  list[0][0] = true;
  
  for(let i = 1; i < list.length; i++){
    for(let j = 0; j < list[i].length; j++){
      const current = list[i];
      const prev = list[i-1];
      const num = nums[i-1];
      
      if(j < num) current[j] = prev[j];
      if(j >= num) {
        if(prev[j] || prev[j - num]) current[j] = true
      }
    } 
  }
  
  if(list[length][target]) console.log("Yes")
  else console.log("No")
}

