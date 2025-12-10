function countTo_N(){

	let delay = 0.5;

	for(let i = 0; i < 5; ++i){

		setTimeout(() => console.log(i),delay);
		delay += 0.5;

	}

}


countTo_N();
