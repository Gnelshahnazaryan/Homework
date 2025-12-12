let str = "Hello World";


function strlen(str){

	let count = 0;

	for(let i = 0; str[i] != undefined; i++){

		count++;

	}
	
	return count;

}

console.log(strlen(str));
