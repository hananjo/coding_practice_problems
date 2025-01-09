// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if(map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
    

}
    //Time complexity: O(n)
    //When to use Two-Pointer:
    //Two pointer would not work when input array is sorted or needs to be sorted for whatever reason
    //the memory usage is a concern and would therefore not use hashmap becuase it would take too much space

    //Use hash map if the input array is not sorted and want the most efficient solution

    //when having to sort and do two pointer, the time complexity would become O(nlogn) which is ok
    //if the input data is under just a few million however more than that it becomes very inefficient 