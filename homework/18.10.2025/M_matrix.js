let matrix = [

[0, 'M', 0, 'M', 0],
[0, 0, 'M', 0, 0],
[0, 0, 0, 0, 0],
['M', 'M', 0, 0, 0],
[0, 0, 0, 'M', 0],
	
];



function foo(matrix){

	let result_matrix = matrix;
	let row = matrix.length;
	let col = matrix[0].length;
	let count = 0;
	

	for(let i = 0; i < row; ++i){
		for(let j = 0; j < col; ++j){

			if(matrix[i][j] === 0){


			

			if(j != col - 1 && matrix[i][j + 1] == 'M' ){

				++count;

			} 
		
			if(i != row - 1 && matrix[i + 1][j] === 'M'){

				++count;

			}

			if(j != 0 && matrix[i][j - 1] === 'M'){

				++count;

			}

			if(i != 0 && matrix[i - 1][j] === 'M'){

				++count;

			}

			if(j != col - 1 && i != row - 1 && matrix[i+1][j + 1] === 'M'){

				++count;

			}

			if(j != 0 && i != 0 && matrix[i - 1][j - 1] === 'M'){

				++count;
			}

			if(j != 0 && i != row - 1 && matrix[i + 1][j - 1] === 'M'){

				++count;
			}

			if(j != col - 1 && i != 0 && matrix[i - 1][j + 1] === 'M'){

				++count;
			}

			result_matrix[i][j] = count;

		}
			count = 0;

	}


	}

	return result_matrix;

}


console.log(foo(matrix));
