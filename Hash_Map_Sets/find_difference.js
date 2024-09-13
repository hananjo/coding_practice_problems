var findDifference = function(nums1, nums2) {
    //     let unique1 = new Set(nums1)
    //     let unique2 = new Set(nums2)
    
    //    nums1.filter((i) => {
    //         if(unique2.has(i)) {
    //             unique2.delete(i)
    //             unique1.delete(i)
    //         }
    //     })
    
    //     return [ [...unique1], [...unique2]]
        let set1 = new Set(nums1);
        let set2 = new Set(nums2);
    
        // Find unique elements in set1 that are not in set2
        let diff1 = [...set1].filter(x => !set2.has(x));
    
        // Find unique elements in set2 that are not in set1
        let diff2 = [...set2].filter(x => !set1.has(x));
    
        return [diff1, diff2];
    };

    //Both are O(n + m) space and time complexity 