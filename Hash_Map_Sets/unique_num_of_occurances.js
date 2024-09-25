1207. Unique Number of Occurrences
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

Example 1:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:
Input: arr = [1,2]
Output: false
Example 3:
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true


//My solution to the problem
// var uniqueOccurrences = function(arr) {
//     let occurance = {}
//     let unique = new Set()

//     for(let i = 0; i < arr.length; i++) {
//         let num = arr[i]
//         if(occurance[num]){
//             occurance[num] ++
//         } else {
//             occurance[num] = 1
//         }
//     }
//     console.log(occurance)
//     for(let occ in occurance) {
//        if(unique.has(occurance[occ])){
//         return false
//        } else {
//         unique.add(occurance[occ])
      
//        }
       
//     }
//     return true
// };

//Modified and simplified solution
// var uniqueOccurrences = function(arr) {
//     let occurance = {};
//     let unique = new Set();

//     for(let num of arr) {
//         occurance[num] = (occurance[num] || 0) + 1;
//     }

//     for(let occ in occurance) {
//         if(unique.has(occurance[occ])) {
//             return false;
//         }
//         unique.add(occurance[occ]);
//     }
    
//     return true;
// };

//Other Possible solution using Map:
var uniqueOccurrences = function(arr) {
    
    let frequencyMap = new Map();
    for (let num of arr) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    let frequencies = new Set();
    for (let frequency of frequencyMap.values()) {
        if (frequencies.has(frequency)) {
            return false; 
        }
        frequencies.add(frequency);
    }

    return true; 
};