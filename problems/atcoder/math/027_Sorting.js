function main(input) {
  let [length,...nums] = input.split("\n");
  nums = nums[0].split(" ").map(e => parseInt(e));
  length = parseInt(length);
  
  const merged = mergeSort(nums);
  
  let str = "";
  for(let i = 0; i < merged.length; i++){
    str = str + " " + merged[i];
  }
  console.log(str);
}

function mergeSort(array){
  if(array.length === 1) return array;
  
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  
  return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
  const merged = [];
  let li = 0;
  let ri = 0;
  
  while(left[li] || right[ri]){
    if(left[li] < right[ri] || right[ri] === undefined){
      merged.push(left[li]);
      li++
    }else {
      merged.push(right[ri]);
      ri++    
    }
  }
  
  return merged;
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
