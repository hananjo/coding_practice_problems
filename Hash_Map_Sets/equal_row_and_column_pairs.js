// 2352. Equal Row and Column Pairs
// Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

// A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

var equalPairs = function(grid) {
   const len = grid.length
   let count = 0
   const rows = new Map()

   for(let r = 0; r < len; r++){
    const row = JSON.stringify(grid[r])
    rows.set(row, 1 + (rows.get(row)) || 0)
   }

   for(let c = 0; c < len; c++) {
    const col = JSON.stringify(grid.map(row => row[c]))
    count += (rows.get(col) || 0)
   }
   return count 
} 

equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]])