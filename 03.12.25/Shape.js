class Shape{

	constructor(color,type){

		if(new.target == Shape){

			throw new Error("Abstract class");
			
		}

	this.color = color;
	this.type = type

	}

	area(){

		throw new Error("Abstract Method will be override");

	}


	perimeter(){

		throw new Error("Abstract Method will be override");

	}


	describe(){
		
		console.log(`${this.color},${this.type}`,this.area(),this.perimeter());

	}

}




class Circle extends Shape{

	constructor(color,type,radius){

		super(color,type);

		this.radius = radius;

	}

	area(){

		return (this.radius ** 2) * Math.PI;

	}

	perimeter(){


		return (2 * Math.PI) * this.radius;

	}

}



class Rectangle extends Shape{

	constructor(color,type,width,height){

		super(color,type);
		this.width = width;
		this.height = height;

	}

	area(){

		return this.width * this.height;

	}


	perimeter(){

		return 2 * (this.width + this.height);

	}

}



class Triangle extends Shape{

	constructor(color,type,a,b,c){

		super(color,type);
		this.a = a;
		this.b = b;
		this.c = c;

	}


	area(){

		return "trinagel area";
		

	}


	perimeter(){

		return this.a + this.b + this.c;

	}

}


const circle = new Circle("red","circle",10);

const rectangle = new Rectangle("red","rectangle",10,10);

const triangle = new Triangle("red","triangle",5,7,2);

//circle.describe();
//rectangle.describe();
triangle.describe();
