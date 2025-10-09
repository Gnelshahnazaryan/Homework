function my_Map(array,callback){

	let res = [];

	for(let i = 0; i < array.length; ++i){

		let new_val = callback(array[i]);

		res[i] = new_val;

	}

	return res;

}


function callback(value){

	return value * 2;

}


let arr = [1,2,3];

console.log(my_Map(arr,callback));
