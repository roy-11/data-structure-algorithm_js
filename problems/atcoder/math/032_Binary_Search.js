function bs(input) {
  let [lengthAndTarget, nums] = input.split("\n");
  let [_, target] = lengthAndTarget.split(" ");
  target = parseInt(target);
  nums = nums.split(" ").map(e=>parseInt(e)).sort((a,b)=> a-b);
  
  let left = 0;　
  let right = nums.length - 1;
  
  while(left <= right){ 
    let middle = Math.floor((left + right) / 2); 
    
    if (target  === nums[middle]){
      console.log("Yes");
      return;
    };
    
    if (target > nums[middle]){
      left = middle + 1;
    };
    
    if (target < nums[middle]){
      right = middle - 1;
    }
  };
  
  console.log("No");
};

bs("7 7\n4 3 2 1 5 6 7")

function bsRecursive(input) {
  let [lengthAndTarget, nums] = input.split("\n");
  let [_, target] = lengthAndTarget.split(" ");
  target = parseInt(target);
  nums = nums.split(" ").map(e=>parseInt(e)).sort((a,b)=> a-b);
  
  let left = 0;　
  let right = nums.length - 1;
  
  binarySearch(target, nums, left, right);  
};

function binarySearch(target, array, left, right){
  let middle = Math.floor((left + right) / 2); 
    
  if (target  === array[middle]){
    console.log("Yes");
    return;
  };
    
  if (target > array[middle]){
    return binarySearch(target, array, middle + 1, right)
  };
  
  if (target < array[middle]){
    return binarySearch(target, array, left, middle - 1)
  }
  
  console.log("No");
}

bsRecursive("7 7\n4 3 2 1 5 6 7")
