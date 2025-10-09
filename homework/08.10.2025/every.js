function my_every(array,callback){

	for(let i = 0 ; i < array.length; ++i){

		if(!(callback(array[i]))){

			return false;

		}

	}

	return true;

}


function callback(value){

	return value % 2 == 0;

}

let arr = [1,2,3,5];

console.log(my_every(arr,callback));
