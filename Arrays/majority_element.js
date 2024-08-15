// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.



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