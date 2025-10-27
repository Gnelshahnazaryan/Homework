class PicsartAcademy{

	constructor(classroomName,roomNumber){

		this.classroom = new Classroom(classroomName,roomNumber);
		this.library = new Library();
		this.kitchen = new Kitchen();


	}


	showInfo(){

		console.log(this.classroom,this.library,this.kitchen);

	}

}


class Classroom{

	constructor(name,roomNumber){

		this.name = name;
		this.roomNumber = roomNumber;
		this.listOfStudents = [];
		this.students_Count = 0;

	}

	addStudent(name){
		
		this.listOfStudents.push(name);
		this.students_Count++;

	}

	listStudents(){

		console.log(this.listOfStudents);

	}

}


class Book{

	constructor(title,author){

		this.title = title;
		this.author = author;

	}

}


class Library{


	constructor(){

		this.listOfBooks = [];
		this.bookCount = 0;

	}

	addBook(title,author){

		this.book = new Book(title,author);
		this.listOfBooks.push(this.book);
		this.bookCount++;
		

	}

	listBooks(){

		console.log(this.listOfBooks);
		console.log("Book Count:", this.bookCount);

	}
	

}


class Kitchen{

	constructor(){

		this.workers = [];
		this.workersCount = 0;

	}

	addWorker(name){

		this.workers.push(name);
		this.workersCount++;

	}

	listWorkers(){

		console.log(this.workers);
		console.log("Workers Count:", this.workersCount);

	}

}


let academy = new PicsartAcademy("Ada Lovelace",1);

academy.classroom.addStudent("Alice");
academy.library.addBook("Clean Code", "Robert C. Martin");
academy.kitchen.addWorker("Chef Bob");
academy.showInfo();

