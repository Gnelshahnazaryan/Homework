class Character{

	constructor(name,hp){

		if(new.target == Character){

			throw new Error("Abstract class cant instatiate");
	

		}

	this.name = name;
	this.hp = hp;

	}

	attack(target){

		throw new Error("Abstract method must be override");

	}


	defend(damage){

		throw new Error("Abstract method must be override");

	}


	isAlive(){

		return this.hp > 0;

	}

}


class Warrior extends Character{


	constructor(name,hp,attackPower){

		super(name,hp)

		this.attackPower = attackPower;

	}


	attack(target){

		target.defend(this.attackPower);

	}


	defend(damage){

		this.hp -= damage;

		if(this.hp < 0){

			this.hp = 0;

		}

	}

}


const warrior = new Warrior("Conan", 120, 8);
