const cache = [];
var climbStairs1 = function(n) {    
    if(cache[n]) return cache[n];
    
    const result = [0,1,2];
    if(n <= 2) return result[n];
    
    cache[n] = climbStairs1(n-1) + climbStairs1(n-2);
    return cache[n];
};

var climbStairs2 = function(n) {    
    const result = [0,1,2];
    if(n <= 2) return result[n];
    
    for(let i = 3; i <= n ;i++){
        result[i] = result[i-1] + result[i-2];
    };
    
    return result[n];
};
