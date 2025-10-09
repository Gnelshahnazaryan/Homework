function my_some(array,callback){

	for(let i = 0; i < arr.length; ++i){

		if(callback(array[i])){

			return true;

		}

	}

	return false;

}


function callback(value){

	return value % 2 == 0;

}

let arr = [1,3,2,7];

console.log(my_some(arr,callback))
