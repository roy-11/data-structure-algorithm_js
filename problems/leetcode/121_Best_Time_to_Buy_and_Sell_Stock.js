var maxProfit = function(prices) {
    let maxProfit = 0;
    let min = undefined;
    
    for(let i = 1; i < prices.length; i++){
        if(min === undefined) min = prices[i-1];
        
        const profit = prices[i] - min;
        maxProfit = Math.max(maxProfit, profit); 
        
        min = Math.min(min, prices[i]);
    }
    
    return maxProfit;
};
