// const containsDuplicate = function(nums) {
//  let numCount = {}
//  for(let i = 0; i < nums.length; i++) {
//    numCount[nums[i]] = (numCount[nums[i]] || 0) + 1
//  }
//  for(let num in numCount) {
//     if(numCount[num] > 1){
//         return true
//     } 
   
//  }
//   return false
// }


const containsDuplicate = function(nums) {
    let unique = new Set()
    for (let i = 0; i < nums.length; i++) {
        if(unique.has(nums[i])) {
            return true
        }
        unique.add(nums[i])

    }
    return false 
}
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))