// 125. Valid Palindrome
// Easy
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
//  non-alphanumeric characters, it reads the same forward and backward. 
//  Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

var isPalindrome = function(s) {
    let letters = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    
    let left = 0;
    let right = letters.length - 1
    while(left < right) {
        if(letters[left] === letters[right]) {
            left++
            right--
        } else {
            return false
        }
    }
   return true
};