var twoSum = function(nums, target) {
    const arrayLength = nums.length;
    for(let i = 0; i < arrayLength; i ++){
        for(let j = i + 1; j < arrayLength; j ++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        };
    };
};

var twoSum2 = function(nums, target) {
    const hashmap = {};
    for(let i = 0 ; i < nums.length ; i++){
        const secondNum = target - nums[i];

        if(hashmap[secondNum] !== undefined){
            return [hashmap[secondNum],i];
        }
        hashmap[nums[i]] = i;
    };
};
