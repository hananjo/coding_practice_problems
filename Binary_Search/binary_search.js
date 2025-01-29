// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.
var search = function(nums, target) {
    let start = 0;               // Start of the search space
    let end = nums.length - 1;   // End of the search space

    while (start <= end) {
        let mid = Math.floor((start + end) / 2); // Calculate the middle index

        if (nums[mid] === target) {
            return mid; // Target found
        } else if (target < nums[mid]) {
            end = mid - 1; // Narrow search to the left half
        } else {
            start = mid + 1; // Narrow search to the right half
        }
    }

    return -1; // Target not found
};