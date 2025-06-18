// 633. Sum of Square Numbers. 
// Medium

// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

var judgeSquareSum = function(c) {
    let left = 0;
    let right = Math.floor(Math.sqrt(c))
    while(left <= right) {
        let sum = left*left + right*right
        if(sum === c) {
            return true
        } else if (sum < c) {
            left++
        } else {
            right--
        }
    }
    return false
};

console.log(judgeSquareSum(5)) //true
console.log(judgeSquareSum(3)) //false