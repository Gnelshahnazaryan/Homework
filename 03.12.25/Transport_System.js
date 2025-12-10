class Transport{

	constructor(name,maxSpeed){

		if(new.target == Transport){

			throw new Error("Error");

		}

		this.name = name;
		this.maxSpeed = maxSpeed;

	}


	move(){

		throw new Error("Override");

	}

	
	getMaxSpeed(){

		throw new Error("Override");

	}

	info(){

		console.log(this.name,this.getMaxSpeed());

	}

}



const FuelMixin = (Base) => class extends Base{

	constructor(name,maxSpeed,fuel = 100){

		super(name,maxSpeed);

		this.fuel = fuel;

	}
	

	refuel(amount){

		this.fuel += amount;

	}


	consume(amount){

		this.fuel -= amount;

		if(this.fuel < 0){

			this.fuel = 0;
	
		}

	}

}

	


class Car extends FuelMixin(Transport){

	constructor(name,maxSpeed){

		super(name,maxSpeed);

	}

	move(){

		this.consume(10);

	}

	getMaxSpeed(){

		return this.maxSpeed;

	}

}


class Plane extends FuelMixin(Transport){

	
	constructor(name,maxSpeed){

		super(name,maxSpeed);

	}

	move(){

		this.consume(30);

	}

	getMaxSpeed(){

		return this.maxSpeed;

	}

}


class Ship extends FuelMixin(Transport){

	constructor(name,maxSpeed){

		super(name,maxSpeed);

	}


	move(){

		this.consume(25);

	}


	getMaxSpeed(){

		return this.maxSpeed;

	}

}



const car = new Car(100, "Toyota", 180);   
const plane = new Plane(200, "Boeing", 900);
const ship = new Ship(300, "Titanic", 40);


console.log("=== Initial Info ===");
car.info();   
plane.info(); 
ship.info();  



console.log("\n=== Moving ===");
car.move();    
plane.move();  
ship.move();  



console.log("\n=== Fuel After Move ===");
console.log(`${car.name} fuel: ${car.fuel}`);   
console.log(`${plane.name} fuel: ${plane.fuel}`); 
console.log(`${ship.name} fuel: ${ship.fuel}`);  




console.log("\n=== Refueling ===");
car.refuel(20);
plane.refuel(50);
ship.refuel(30);


console.log(`${car.name} fuel after refuel: ${car.fuel}`);
console.log(`${plane.name} fuel after refuel: ${plane.fuel}`);
console.log(`${ship.name} fuel after refuel: ${ship.fuel}`);

