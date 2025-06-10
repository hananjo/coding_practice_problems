// 167. Two Sum II - Input Array Is Sorted
// Medium
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

//Given: 1-indexed array of integers
//      sorted ascending order ex[1,2,3,4]

//Note: dont use same element twice
        //Constant time O(1)

//Return: indices of the two numbers that add up to target number
    // also return indices added by 1 ex: [2,7,11,15] target= 9 return [1,2] or [2,3,4] targtet = 6 return [1,3]

//Plan: have two pointers: one pointing to the left(0) --start and one at the end of array end
    // while loop start is less than or equal to end
    //if statement start + end === target return [arr[start] + 1, arr[end] + 1]
    //else if start + end > target then end-- otherwise start++
    //if nothing adds up, return []


    var twoSum = function(numbers, target) {
        let start = 0;
        let end = numbers.length -1
    
        while(start <= end) {
            if(numbers[start] + numbers[end] === target) return [start + 1, end + 1]
            if(numbers[start] + numbers[end] > target) {
                end--
            } else {
                start++
            }
            
        }
        return []
    };