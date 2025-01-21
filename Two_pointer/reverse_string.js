// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

//naive solution 
// const reverseString = function(str) {
//     let charArray = str.split('')
//     let start = 0;
//     let end = str.length -1 

//     while(start < end) {
//         let curr = charArray[start]
//         charArray[start] = charArray[end]
//         charArray[end] = curr
//         start++
//         end--
//     }
//     return charArray.join('')
// }

const reverseString = function(str) {
    let charArray = str.split('')
    let start = 0;
    let end = str.length -1 

    while(start < end) {
      [charArray[start], charArray[end]] = [charArray[end], charArray[start]]
        start++
        end--
    }
    return charArray.join('')
}