class Student{

    constructor(name){

        this.name = name;
        this.grades = [];

    }

    addGrade(grade){

        this.grades.push(grade);

    }

    average(){

        const size = this.grades.length;
        let average = 0;

        if(this.grades == []){

            return 0;

        }
    
        for(let i = 0; i < size; ++i){

            average += this.grades[i];

        }

        return average / size

     }

}


const student = new Student("Bob");


student.addGrade(20);
student.addGrade(30);
console.log(student.average());
