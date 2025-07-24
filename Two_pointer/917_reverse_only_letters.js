// 917. Reverse Only Letters

// Given a string s, reverse the string according to the following rules:

// All the characters that are not English letters remain in the same position.
// All the English letters (lowercase or uppercase) should be reversed.
// Return s after reversing it.
// Example 1:

// Input: s = "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: s = "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: s = "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"
let reverseOnlyLetters = function(s) {
    const isLetter = (char) => /^[a-zA-Z]$/.test(char)
    let chars = s.split('')
    let left = 0
    let right = chars.length - 1

    while(left < right) {
        if(!isLetter(chars[left])){
            left++;
        }else if(!isLetter(chars[right])) {
            right--;
        } else {
             [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--
        }
       
    }
    return chars.join('')
};
console.log(reverseOnlyLetters("ab-cd"))
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")) // "j-Ih-gfE-dCba"
