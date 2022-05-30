var containsDuplicate = function(nums) {
    const numsSet = new Set();
    for(let i in nums){
        if(numsSet.has(nums[i])) return true;
        numsSet.add(nums[i]);
    }
    return false;
};
