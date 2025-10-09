let array1 = [1,2];
let array2 = [3,4];


function merge_arrays(arr1,arr2){

	let res_arr = [];
	const arr1_size = arr1.length;
	const arr2_size = arr2.length;

	for(let i = 0; i < arr1_size; i++ ){

		res_arr[i] = arr1[i];

	}

	for(let i = 0; i < arr2_size; i++){
	
		res_arr[arr1_size + i] = arr2[i];
	
	}

	return res_arr;

}


console.log(merge_arrays(array1,array2));
