//88. Merge Sorted Array (Easy)

let merge = function(nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1
    let k = m + n - 1

    while(i >= 0 && j >= 0) {
        if(nums1[i] > nums2[j]) {
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums2[j]
            j--
        }
        k--
    }

    while(j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--
    }
}

// var merge = function(nums1, m, nums2, n) {
//     let i = m - 1; // Pointer for the last element in nums1 (considering the first m elements)
//     let j = n - 1; // Pointer for the last element in nums2
//     let k = m + n - 1; // Pointer for the last position in nums1 (considering its full capacity)

//     // Merge nums1 and nums2 starting from the last element of each
//     while (i >= 0 && j >= 0) {
//         if (nums1[i] > nums2[j]) {
//             nums1[k] = nums1[i]; // Place the larger element at the end of nums1
//             i--;
//         } else {
//             nums1[k] = nums2[j]; // Place the larger element at the end of nums1
//             j--;
//         }
//         k--;
//     }

//     // If there are any remaining elements in nums2, copy them into nums1
//     while (j >= 0) {
//         nums1[k] = nums2[j];
//         j--;
//         k--;
//     }

//     // No need to copy remaining elements from nums1, as they are already in place
// };