var romanToInt = function(s) {
   
	let size = s.length;
	let res = 0;

	let obj = {

		'I':1,
		'V':5,
		'X':10,
		'L':50,
		'C':100,
		'D':500,
		'M':1000

	};


	for(let i = 0; i < size; ++i){

		if(obj[s[i]] < obj[s[i + 1]]){

			res += (obj[s[i + 1]] - obj[s[i++]]);

		}else{

			res += obj[s[i]];
	
		}

	}

	return res;

};



console.log(romanToInt("LVIII"));
