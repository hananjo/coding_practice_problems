// 1657. Determine if Two Strings Are Close
// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"

var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false;

    let freq1 = {}
    let freq2 = {}

    for (let char of word1) {
        //the value of freq1[char] if available + 1 or if not then 0 + 1
        freq1[char] = (freq1[char] || 0) + 1
    }

    for (let char of word2) {
        freq2[char] = (freq2[char] || 0) + 1
    }    

    let chars1 = Object.keys(freq1).sort()
    let chars2 = Object.keys(freq2).sort()
    if(chars.join('') !== chars2.join('')) return false;

    let values1 = Object.values(freq1).sort((a, b) => a - b)
    let values2 = Object.balues(freq2).sort((a, b) => a - b)

    return values1.join('') === values2.join('')
}; 