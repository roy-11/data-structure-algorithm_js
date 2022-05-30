var maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0];
    
    let max = nums[0]; 
    let current = nums[0];
    for(let i = 1; i < nums.length; i++){
        const sum = current + nums[i];
        current = Math.max(sum, nums[i]); 
        max = Math.max(current, max); 
    }
    
    return max;
};
