//EASY LEETCODE: 1768. Merge Strings Alternately

// You are given two strings word1 and word2. 
// Merge the strings by adding letters in alternating order, 
// starting with word1. If a string is longer than the other, 
// append the additional letters onto the end of the merged string.
// Return the merged string.

var mergeAlternately = function(word1, word2) {
    let start = 0;
    let newString = ''
    while(start < word1.length && start < word2.length) {
       newString += word1[start]
       newString += word2[start]
       start++
    }

    if(word1.length > start) {
    newString += word1.slice(start)
    }

    if(word2.length > start) {
    newString += word2.slice(start)
    }

    return newString
};
