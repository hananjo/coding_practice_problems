function reverseVowels(s) {
    const vowels = 'aeiouAEIOU';
    let chars = s.split(''); // Convert string to array for easier manipulation
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer until a vowel is found
        while (left < right && vowels.indexOf(chars[left]) === -1) {
            left++;
        }
        // Move right pointer until a vowel is found
        while (left < right && vowels.indexOf(chars[right]) === -1) {
            right--;
        }
        // Swap the vowels
        if (left < right) {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }

    return chars.join(''); // Convert array back to string
}