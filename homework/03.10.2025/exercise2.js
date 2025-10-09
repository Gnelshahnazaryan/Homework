let str = "hello";

function to_upper_case(str){

	let res = '';

	for(let i = 0; i < str.length; i++){

		let a = str.charCodeAt(i);

		if((a >= 97 && a <= 122) && (a < 65  || a > 122)){

			continue;

		}

		a -= 32;

		res += String.fromCharCode(a);

	}

	return res;

}

console.log(to_upper_case(str));
