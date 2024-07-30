//605. Can Place Flowers 

// You have a long flowerbed in which some of the plots are planted, 
// and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, 
// where 0 means empty and 1 means not empty, and an integer n, 
// return true if n new flowers can be planted in the flowerbed without violating 
// the no-adjacent-flowers rule and false otherwise.



var canPlaceFlowers = function(flowerbed, n) {
    let i = 0
    let count = 0
    while(i < flowerbed.length) {
        if(flowerbed[i] === 0) {
            let prev = (i === 0 ? 0 : flowerbed[i - 1])
            let next = ((i === flowerbed.length - 1) ? 0 : flowerbed[i + 1])
            if(prev === 0 && next === 0) {
                flowerbed[i] = 1
                count++
                i += 2;
                continue;
            } 
        }
        i++
    }
    return count >= n
}