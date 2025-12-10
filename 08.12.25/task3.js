function ping(){

	let interval = setInterval(() => console.log("ping"),1000);

	setTimeout(() => {

    	clearInterval(interval);
    	console.log("Stopped");

  	}, 5000);

	}



ping();
