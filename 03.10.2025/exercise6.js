let str1 = "Learning JavaSJavAcript"; 
let str2 = "JavA";


function strstr(str1,str2){

	const size1 = str1.length;
	const size2 = str2.length;

	let index = 0;
	let res = '';

	for(let i = 0; i < size1; i++)
	{

		if(str2[index] == str1[i]){

			index++;
			res += str1[i];

		}

		if(str2 === res){

			return true;

		}

	}

	return false;

}


console.log(strstr(str1,str2));
