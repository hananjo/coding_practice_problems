
// function isAnagram(s, t) {
//     if(s.length !== t.length) return false 
//     let obj1 = {}
//     let obj2 = {}

//     for (let i = 0; i < s.length; i++) {
//         if (obj1[s[i]]) {
//             obj1[s[i]] ++
//         } else {
//             obj1[s[i]] = 1
//         }
//     }
//     for (let i = 0; i < t.length; i++) {
//         if (obj2[t[i]]) {
//             obj2[t[i]] ++
//         } else {
//             obj2[t[i]] = 1
//         }
//     }
//     for (let num in obj1){
//         if(obj1[num] != obj2[num]) {
//             return false
//         } 
        
//     }
//     return true
// }

//only two loops, less storage, more effienct code, less objects 

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let charCount = {};

    // Count characters in `s`
    for (let i = 0; i < s.length; i++) {
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    }

    // Subtract counts using `t`
    for (let i = 0; i < t.length; i++) {
        if (!charCount[t[i]]) {
            return false; // `t[i]` not in `s` or frequency mismatch
        }
        charCount[t[i]]--;
    }

    return true; // If all counts matched
}

isAnagram("anagram", "nagaram")
isAnagram("rat", "car")