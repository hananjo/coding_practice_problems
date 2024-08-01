// Given an integer array nums, 
// return an array answer such that answer[i] is equal to the product 
// of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums
//  is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) 
// time and without using the division operation.


let productExceptSelf = function(nums) {
    let n = nums.length
    let right = []
    let left = []
    let answer = []

    left[0] = 1
    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1]
    }
    right[n - 1]  = 1
    for(let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1]
    }

    for(let i = 0; i< n; i++) {
        answer[i] = left[i] * right[i]
    }
    return answer 
}

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// i = 1 & left[0] = 1
// left[1] = left [1 -1 ] * nums[1 - 1]
// left[1] = left[0] * nums[0]
// left[1] = 1 * 1 = 1
// [1, 1, ]

// left[2] = left[2 - 1] * nums[2 - 1]
// left[2] = left[1] * nums[1]
// left[2] = 1 * 2 = 2
// [1, 1, 2]

// left[3] = left[3 - 1] * nums[3 - 1]
// left[3]  = left[2] * nums[2]
// left[3] = 2 * 3 = 6
// [1, 1, 2, 6]

// right[n - 1] = 1
// right[i] = right[i + 1] * nums[i + 1]
// right[2] = right[ 2 + 1] * nums[2 + 1]
// right[2] = right[3] * nums[3]
// right[2] = 1 * 4 = 4
// [ 4,1] 

// right[1] = right[1 + 1] * nums[1 + 1]
// right[1] = right[2] * nums[2]
// right[1] = 4 * 3 = 12
// [, 12, 4, 1]
// right[0] = right[1] * nums[1]
// right[0] = 12 * 2 = 24
// [24, 12, 4, 1]

// [1,1,2,6] (left)
// [24,12,4,1] (right)
// answer = [24, 12, 8, 6]

