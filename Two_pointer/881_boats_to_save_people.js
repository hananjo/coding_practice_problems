// 881. Boats to Save People
// Medium

// You are given an array people where people[i] is the weight of the ith person,
//  and an infinite number of boats where each boat can carry a maximum weight of limit. 
//  Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

// Return the minimum number of boats to carry every given person.
//Summary: People array || people[i] = weight of ith person
         //Each boat carries MAX weight of limit
         //Each boat carries max 2 people at once
         //Sum of weight of those people is at most limit
         //Return minimum number of boats to carry every given person.
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a - b)
    let boats = 0;
    let left = 0;
    let right = people.length - 1

    while(left <= right) {
        let sum = people[left] + people[right]
        if(sum <= limit) {
            left++
        }
        right--
        boats++
    }
    return boats
};

console.log(numRescueBoats([1,2], 3)) // Ans 1
console.log(numRescueBoats([3,2,2,1], 3)) //sorted [1,2,2,3] Ans 3
console.log(numRescueBoats([3,5,3,4], 5)) //sorted [3,3,4,5] Ans 4