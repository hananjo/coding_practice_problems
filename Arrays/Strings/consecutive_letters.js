// Given an array of words, your task is to write a function 
// that returns an array of integers. For each word in the input array:
// Return 1 if the word contains two consecutive identical letters.
// Return 0 if the word does not contain any consecutive identical letters.

function hasConsecutiveLetters(word) {
    for (let i = 0; i < word.length - 1; i++) {
        if (word[i] === word[i + 1]) {
            return true;
        }
    }
    return false;
}

function consecutiveLetters(words) {
    return words.map(word => hasConsecutiveLetters(word) ? 1 : 0);
}

// Example usage:
const words = ["hello", "world", "book", "apple", "noon"];
const result = consecutiveLetters(words);
console.log(result); // Output: [1, 0, 1, 1, 1]