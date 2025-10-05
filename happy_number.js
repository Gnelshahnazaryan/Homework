let number = 56;

function pow(num)
{

	return num * num;

}

function digit_count(num)
{
	let count = 0;
	
	while(num)
	{

		count++;
		num = Math.floor(num / 10);

	}

	return count;

}


function happy_number(number)
{

	if(number === 0)
	{

		return false;

	}

	let sum = 0;

	do{

		let dig_count = digit_count(number);
		for(let i = 1; i <= dig_count; i++)
		{

			let digit = number % 10;

			sum += pow(digit);
			number = Math.floor(number / 10);

		}

		number = sum;
		sum = 0;
		if(number === 37)
		{
		
			console.log("Not happy number")
			return false;

		}

	}while(number !== 1)

	console.log("Happy number");
	return true;

}


happy_number(number);
