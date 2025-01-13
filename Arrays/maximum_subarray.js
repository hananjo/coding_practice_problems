// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

var maxSubArray = function(arr) {
    let res = arr[0]
    let maxEnding = arr[0]

    for(let i = 1; i < arr.length; i++) {
        maxEnding = Math.max(maxEnding + arr[i], arr[i])
        res = Math.max(res, maxEnding)
    }
    return res
};

//O(n) time complexity and 0(1) space complexity

//Naive solution below is O(n^2) time complexity with O(1) space

// function maxSubArraySum(arr) {
//     let res = arr[0]
//     for(let i = 0; i < arr.length; i++) {
//         let currSum = 0

//         for(let j = i; j < arr.length; j++) {
//             currSum = currSum + arr[j]
//             res = Math.max(res, currSum)
//         }
//     }
//     return res
// }
