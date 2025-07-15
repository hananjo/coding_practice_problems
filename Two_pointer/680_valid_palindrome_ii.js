// 680. Valid Palindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

let validPalindrome = function(s) {
    function isPalindromeRange(str, left, right) {
        while(left < right) {
            if(str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true
    }
    let left = 0;
    let right = s.length -1;
    
    while(left < right) {
        if (s[left] === s[right]) {
            left++;
            right--
        } else {
            return isPalindromeRange(s, left + 1, right) || isPalindromeRange(s, left, right -1)
        }
    }
    return true
}