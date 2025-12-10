class Repository{

	constructor(){

		if(new.target == Repository){

			throw new Error("Interface class");

		}

	}

	add(item){

		throw new Error("Abstract method must be overriden");

	}

	remove(id){

		throw new Error("Abstract method must be overriden");

	}


	find(id){

		throw new Error("Abstract method must be overriden");

	}

	
	findAll(){

		throw new Error("Abstract method must be overriden");
		
	}

}


class UserRepository extends Repository{

	constructor(){

		this.storage = [];

	}

		

}
