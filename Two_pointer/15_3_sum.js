// 15. 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Given: Array of nums
//Return triplets so that i != j , j != k , i != k
// and nums[i] + nums[j] + nums[k] == 0

//Plan: Sort the array. Need two points to compare values start = 0

function threeSum(nums) {
    nums.sort((a, b) => a - b) //sort array ascending order
    const res = []; //return a new array of triplet values

    for(let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1
        let right = nums.length - 1;

        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right]

            if(sum === 0) {
                res.push([nums[i], nums[left], nums[right]])
                while(nums[left] === nums[left + 1]) left++
                while(nums[right] === nums[right - 1]) right--;

                left++;
                right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
 return res
}

nums1 = [-1,0,1,2,-1,-4]
nums2 = [0,1,1]
nums3 = [0,0,0]
console.log(threeSum(nums1))
console.log(threeSum(nums2))
console.log(threeSum(nums3))