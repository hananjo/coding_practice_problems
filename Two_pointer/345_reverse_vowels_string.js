// 345. Reverse Vowels of a String
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

var reverseVowels = function(s) {
    let vowels = new Set('aeiouAEIOU')
    let chars = s.split('')
  let left = 0;
  let right = chars.length - 1
  while(left < right) {
   while(left < right && !vowels.has(chars[left])) left++
   while(left < right && !vowels.has(chars[right])) right--
   [chars[left], chars[right]] = [chars[right], chars[left]]
   left++
   right--
  }
    return chars.join('')
};