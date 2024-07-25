//1071 Greatest Common Divisor of Strings (Easy)

// For two strings s and t, 
// we say "t divides s" if and only if s = t + t + t + ... + t + t 
// (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, 
// return the largest string x such that x divides both str1 and str2.

const gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return '';
    //this is a recursive call function that will keep running until the base line is met
    //which is b === 0, so we keep doing the module with a & b until 0 is reached
    const gcd = (a, b) => (b === 0 ? a: gcd(b, a % b))
    //this will run and invoke the gcd function with the lenght of the strs 
    const lenGCD = gcd(str1.length, str2.length);
    // once 0 is reached with gcd it will enter this to be sliced of the prefix
    return str1.subString(0, lenGCD)

}