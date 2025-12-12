function my_forEach(array,callback){

	for(let i = 0; i < array.length; i++){

		callback(array[i]);

	}

	return undefined;

}


function callback(value){

	console.log(value);

}

let arr = [1,2,3,4,5];


my_forEach(arr,callback);



