var majorityElement = function(nums) {
    let obj = {};
    let count = 0;
    let majorityElement = nums[0];

    // Count the frequency of each element in the array
    for(let num of nums) {
        if(!obj[num]) {
            obj[num] = 1;
        } else {
            obj[num]++;
        }
        
        // Check if this element is now the majority element
        if(obj[num] > count) {
            count = obj[num];
            majorityElement = num;
        }
    }
    
    return majorityElement;
};