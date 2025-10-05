let str = "Hello world";

let sub_str = "world";


function find_sub_str(str,sub_str){

	const str_size = str.length;
	const sub_str_size = sub_str.length;
	let res = "";
	let index = 0;

	for(let i = 0; i < str_size; i++){

		if(str[i] === sub_str[index]){

			res += str[i];
			index++;

		}

		if(res === sub_str){

			return true;

		}

	}
	
	return false;
}


console.log(find_sub_str(str,sub_str));
