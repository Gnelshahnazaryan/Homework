let str = "hello";


function str_rev(str){

	let res = "";

	let size = str.length;

	for(let i = size - 1 ; i >= 0; i--){

		res += str[i];

	}

	return res;

}

console.log(str_rev(str));
