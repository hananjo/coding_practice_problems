// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

let isPalindrome = function(s) {
    const isAlphaNumeric = (char) => {
        return /^[a-zA-Z0-9]$/.test(char);
    }
    let left = 0;
    let right = s.length - 1

    while(left < right) {
        while(left < right && !isAlphaNumeric(s[left])) {
            left++
        }
        while(left < right && isAlphaNumeric(s[right])) {
            right--
        }
        if(s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false 
        }
        left++
        right--
    }
return true
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))