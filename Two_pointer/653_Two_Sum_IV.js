
// 653. Two Sum IV - Input is a BST

// Given the root of a binary search tree and an integer k,
// return true if there exist two elements in the 
// BST such that their sum is equal to k, or false otherwise.

// Example 1:


// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true
// Example 2:


// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false

let findTarget = function(root, k) {
    //need to flatten the BST into a sorted array
    const vals = []
    function inOrder(node) {
        if(!node) return
        inOrder(node.left);
        vals.push(node.val)
        inOrder(node.right)
    }
inOrder(root)
    let i = 0
    let j = vals.length - 1

    while(i < j) {
        let sum = vals[i] + vals[j]
        if(sum === k) {
            return true
        } else if (sum < k) {
            i++
        } else {
            j--
        }
    }
    return false
}

// var findTarget = function(root, k) {
//     function getLeftmost(root) {
//         let node = root
//     while(node.left !== null ) {
//         node = node.left
//     }
//     return node
// }

//  function getRightMost(root) {
//     let node = root
//     while(node.right !== null) {
//         node = node.right
//     }
//     return node
//  }
//  let lowNode = getLeftmost(root)
//  let highNode = getRightMost(root)

//  while(lowNode !== highNode) {
//     const sum = lowNode.val + highNode.val
//     if(sum === k){
//         return true
//     } else if(sum < k) {
//         lowNode.nextInOrder(lowNode)
//     } else {
//         highNode.prevInOrder(highNode)
//     }
//  }
//  return false
// };