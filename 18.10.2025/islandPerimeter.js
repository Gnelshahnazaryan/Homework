var islandPerimeter = function(grid) {

    let count = 0;
    let result = 0;
    let row = grid.length;
    let col = grid[0].length;

    for(let i = 0; i < row; ++i){
        for(let j = 0; j < col; ++j){
            if(grid[i][j] === 1){
                count = 4;
                if(i != 0 && grid[i - 1][j] == 1){
                    --count;
                }

                if(i != row - 1 && grid[i + 1][j] == 1){
                    --count;
                } 

                if(j != 0 && grid[i][j - 1] == 1){
                    --count;
                }

                if(j != col - 1 && grid[i][j + 1] == 1){
                    --count;
                }
                result += count;
                
            }
            
        }
    }

  return result; 

};
