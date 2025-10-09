function my_filter(array,callback){

	let res = [];

	for(let i = 0; i < array.length; i++){

		let new_val = callback(array[i]);

		if(new_val){

			res.push(array[i]);

		}

	}
	
	return res;

}


function callback(value){

	/*if(value % 2 == 0){

		return value;

	}*/
	
	return value % 2 == 0;
}


let arr = [1,2,3,4,5];

console.log(my_filter(arr,callback));
