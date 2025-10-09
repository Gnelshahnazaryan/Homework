let array = [8,7,2,9,10,34];


function sum_elements(array){

	const arr_size = array.length;
	let result = 0;


	for(let i = 0; i < arr_size; i++){

		result += array[i];

	}

	return result;

}

console.log(sum_elements(array));
