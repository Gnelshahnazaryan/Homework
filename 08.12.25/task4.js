function asyncDouble(n){

	return new Promise((resolve,reject) => {

		setTimeout(() => {

			resolve(n * 2);

		},300)

	});

}


asyncDouble(3).then((result) => console.log(result));
